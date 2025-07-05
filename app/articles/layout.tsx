"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Grid Background - Brighter */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.25) 2px, transparent 2px),
        linear-gradient(90deg, rgba(255,255,255,0.25) 2px, transparent 2px)
      `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Header - Changed to black background */}
      <header className="relative z-10 border-b border-gray-800 bg-black backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/socialeagle-logo.png"
                alt="SocialEagle.AI"
                width={60}
                height={60}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10">{children}</main>
    </div>
  )
}
