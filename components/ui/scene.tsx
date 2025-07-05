"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  RoundedBox,
  SpotLight,
  useDepthBuffer,
} from "@react-three/drei";
import * as THREE from "three";
import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  forwardRef,
} from "react";
import { Vector3, Matrix4, Quaternion, Euler } from "three";

const RubiksCubeModel = forwardRef((props, ref) => {
  const ANIMATION_DURATION = 1.2;
  const GAP = 0.01;
  const RADIUS = 0.075;

  const mainGroupRef = useRef();
  const isAnimatingRef = useRef(false);
  const currentRotationRef = useRef(0);
  const lastMoveAxisRef = useRef(null);
  const currentMoveRef = useRef(null);
  const isMountedRef = useRef(true);

  const [size] = useState(1.2); // Bigger cubes!
  const [cubes, setCubes] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const reusableVec3 = useMemo(() => new Vector3(), []);
  const reusableMatrix4 = useMemo(() => new Matrix4(), []);
  const reusableQuaternion = useMemo(() => new Quaternion(), []);

  React.useImperativeHandle(ref, () => ({
    ...mainGroupRef.current,
    reset: resetCube,
  }));

  const initializeCubes = useCallback(() => {
    const initial = [];
    const positions = [-1, 0, 1];
    for (let x of positions) {
      for (let y of positions) {
        for (let z of positions) {
          initial.push({
            position: new Vector3(x, y, z),
            rotationMatrix: new Matrix4().identity(),
            id: `cube-${x}-${y}-${z}`,
            originalCoords: { x, y, z },
          });
        }
      }
    }
    return initial;
  }, []);

  useEffect(() => {
    setCubes(initializeCubes());
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, [initializeCubes]);

  const resetCube = useCallback(() => {
    if (!isMountedRef.current) return;
    setCubes(initializeCubes());
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.set(0, 0, 0);
    }
    isAnimatingRef.current = false;
    currentRotationRef.current = 0;
    lastMoveAxisRef.current = null;
    currentMoveRef.current = null;
  }, [initializeCubes]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!isMountedRef.current) return;
      const isPageVisible = document.visibilityState === "visible";
      setIsVisible(isPageVisible);
      if (!isPageVisible) {
        resetCube();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, [resetCube]);

  const possibleMoves = useMemo(() => {
    const moves = [];
    for (let axis of ["x", "y", "z"]) {
      for (let layer of [-1, 0, 1]) {
        for (let direction of [1, -1]) {
          moves.push({ axis, layer, direction });
        }
      }
    }
    return moves;
  }, []);

  const isInLayer = useCallback((position, axis, layer) => {
    const coord =
      axis === "x" ? position.x : axis === "y" ? position.y : position.z;
    return Math.abs(coord - layer) < 0.1;
  }, []);

  const selectNextMove = useCallback(() => {
    if (!isAnimatingRef.current && isVisible && isMountedRef.current) {
      const availableMoves = possibleMoves.filter(
        (move) => move.axis !== lastMoveAxisRef.current
      );
      const move =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      const rotationAngle = Math.PI / 2;
      currentMoveRef.current = { ...move, rotationAngle };
      lastMoveAxisRef.current = move.axis;
      isAnimatingRef.current = true;
      currentRotationRef.current = 0;
    }
  }, [possibleMoves, isVisible]);

  useEffect(() => {
    let timeoutId;
    const scheduleNextMove = () => {
      if (isVisible && isMountedRef.current) {
        const delay = isAnimatingRef.current
          ? ANIMATION_DURATION * 1000 + 500
          : 1000;
        timeoutId = setTimeout(() => {
          selectNextMove();
          if (isMountedRef.current) {
            scheduleNextMove();
          }
        }, delay);
      }
    };
    scheduleNextMove();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, selectNextMove]);

  const createRotationMatrix = useCallback(
    (axis, angle) => {
      const matrix = new Matrix4();
      const quaternion = new Quaternion();
      const vec3 = new Vector3();
      if (axis === "x") vec3.set(1, 0, 0);
      else if (axis === "y") vec3.set(0, 1, 0);
      else if (axis === "z") vec3.set(0, 0, 1);
      quaternion.setFromAxisAngle(vec3, angle);
      return matrix.makeRotationFromQuaternion(quaternion);
    },
    []
  );

  const easeInOutQuad = useCallback((t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }, []);

  const matrixToEuler = useCallback((matrix) => {
    const quaternion = new Quaternion().setFromRotationMatrix(matrix);
    return new Euler().setFromQuaternion(quaternion);
  }, []);

  const normalizePositions = useCallback((cubes) => {
    return cubes.map((cube) => {
      const x = Math.round(cube.position.x);
      const y = Math.round(cube.position.y);
      const z = Math.round(cube.position.z);
      const newPosition =
        Math.abs(cube.position.x - x) > 0.001 ||
        Math.abs(cube.position.y - y) > 0.001 ||
        Math.abs(cube.position.z - z) > 0.001
          ? new Vector3(x, y, z)
          : cube.position;
      return {
        ...cube,
        position: newPosition,
      };
    });
  }, []);

  const updateCubes = useCallback(
    (prevCubes, move, stepRotationMatrix) => {
      return prevCubes.map((cube) => {
        if (isInLayer(cube.position, move.axis, move.layer)) {
          const tempVec3 = new Vector3(
            cube.position.x,
            cube.position.y,
            cube.position.z
          );
          tempVec3.applyMatrix4(stepRotationMatrix);
          const newRotationMatrix = new Matrix4().multiplyMatrices(
            stepRotationMatrix,
            cube.rotationMatrix
          );
          return {
            ...cube,
            position: tempVec3,
            rotationMatrix: newRotationMatrix,
          };
        }
        return cube;
      });
    },
    [isInLayer]
  );

  useFrame((state, delta) => {
    if (!isVisible || !isMountedRef.current || !mainGroupRef.current) return;
    mainGroupRef.current.rotation.x += delta * 0.2;
    mainGroupRef.current.rotation.y += delta * 0.3;
    mainGroupRef.current.rotation.z += delta * 0.1;

    if (isAnimatingRef.current && currentMoveRef.current) {
      const move = currentMoveRef.current;
      const targetRotation = move.rotationAngle || Math.PI / 2;
      const rotation = delta / ANIMATION_DURATION;

      if (currentRotationRef.current < 1) {
        const newRotation = Math.min(
          currentRotationRef.current + rotation,
          1
        );
        const prevRotation = currentRotationRef.current;
        currentRotationRef.current = newRotation;

        const easedProgress = easeInOutQuad(newRotation);
        const prevEasedProgress = easeInOutQuad(prevRotation);
        const currentAngle = easedProgress * targetRotation;
        const prevAngle = prevEasedProgress * targetRotation;
        const stepRotation = currentAngle - prevAngle;

        const stepRotationMatrix = createRotationMatrix(
          move.axis,
          stepRotation * move.direction
        );

        if (isMountedRef.current) {
          setCubes((prevCubes) => {
            const updatedCubes = updateCubes(
              prevCubes,
              move,
              stepRotationMatrix
            );

            if (newRotation >= 1) {
              const normalizedCubes = normalizePositions(updatedCubes);
              isAnimatingRef.current = false;
              currentRotationRef.current = 0;
              currentMoveRef.current = null;
              return normalizedCubes;
            }

            return updatedCubes;
          });
        }
      }
    }
  });

  const chromeMaterial = useMemo(
    () => ({
      color: "#000000",
      metalness: 0.7,
      roughness: 0.3,
      reflectivity: 0.8,
    }),
    []
  );

  if (!cubes?.length) return null;

  return (
    <group ref={mainGroupRef} {...props}>
      {cubes.map((cube) => {
        const euler = matrixToEuler(cube.rotationMatrix);
        return (
          <group
            key={cube.id}
            position={[
              cube.position.x * (size + GAP),
              cube.position.y * (size + GAP),
              cube.position.z * (size + GAP),
            ]}
            rotation={[euler.x, euler.y, euler.z]}
          >
            <RoundedBox args={[size, size, size]} radius={RADIUS} smoothness={4}>
              <meshPhysicalMaterial {...chromeMaterial} />
            </RoundedBox>
          </group>
        );
      })}
    </group>
  );
});
RubiksCubeModel.displayName = "RubiksCubeModel";

function CameraController() {
  const { camera } = useThree();
  useFrame(() => {
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneContent() {
  const depthBuffer = useDepthBuffer({
    size: 2048,
    frames: 1,
    disableRenderLoop: true,
  });

  return (
    <>
      <SpotLight
        depthBuffer={depthBuffer}
        color="#ffffff"
        position={[3, 3, 2]}
        volumetric
        opacity={2}
        penumbra={1}
        distance={20}
        angle={0.7}
        attenuation={40}
        anglePower={5}
        intensity={3}
        castShadow
      />

      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 8]} />
      <CameraController />

      <Suspense fallback={null}>
        <RubiksCubeModel />
      </Suspense>
    </>
  );
}

export function Scene() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
