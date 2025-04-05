"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create bubbles
    const bubbles: Bubble[] = []
    const bubbleCount = Math.floor(window.innerWidth / 30) // Adjust density based on screen width

    const tealColors = [
      "rgba(45, 212, 191, 0.2)", // teal-400
      "rgba(20, 184, 166, 0.2)", // teal-500
      "rgba(17, 94, 89, 0.2)", // dark teal
      "rgba(55, 65, 81, 0.3)", // gray-700
      "rgba(31, 41, 55, 0.3)", // gray-800
    ]

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20, // 20-80px bubbles
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: tealColors[Math.floor(Math.random() * tealColors.length)],
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 opacity
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach((bubble) => {
        // Move bubble
        bubble.x += bubble.speedX
        bubble.y += bubble.speedY

        // Bounce off edges
        if (bubble.x < 0 || bubble.x > canvas.width) bubble.speedX *= -1
        if (bubble.y < 0 || bubble.y > canvas.height) bubble.speedY *= -1

        // Draw bubble
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fillStyle = bubble.color
        ctx.fill()

        // Add blur effect
        ctx.shadowColor = bubble.color
        ctx.shadowBlur = 15
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen z-0" style={{ filter: "blur(3px)" }} />
}

