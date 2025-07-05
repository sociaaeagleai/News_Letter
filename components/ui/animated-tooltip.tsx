"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", handleTouch, { once: true });
    return () => {
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.id}
          onMouseEnter={() => !isTouch && setHoveredIndex(item.id)}
          onMouseLeave={() => !isTouch && setHoveredIndex(null)}
        >
         

          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="object-cover rounded-full h-8 w-8 group-hover:scale-105 group-hover:z-30 relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};
