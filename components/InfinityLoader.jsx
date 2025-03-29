"use client"

import { useEffect, useRef } from "react"

export default function InfinityLoader() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Set up animation variables
    let t = 0
    const speed = 0.01
    const colors = ["#ef4444", "#f97316", "#f59e0b"]

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw multiple infinity symbols with different sizes and colors
      for (let i = 0; i < 3; i++) {
        const size = 40 - i * 8
        const offset = i * 0.5

        drawInfinity(width / 2, height / 2, size, t + offset, colors[i])
      }

      // Update time
      t += speed

      // Request next frame
      requestAnimationFrame(animate)
    }

    // Function to draw a single infinity symbol
    const drawInfinity = (x, y, size, time, color) => {
      ctx.save()
      ctx.translate(x, y)

      // Set up style
      ctx.strokeStyle = color
      ctx.lineWidth = 4
      ctx.lineCap = "round"

      // Begin path
      ctx.beginPath()

      // Draw infinity using parametric equations
      const steps = 100
      let firstPoint = true

      for (let i = 0; i <= steps; i++) {
        const progress = i / steps
        const angle = progress * Math.PI * 2

        // Parametric equation for infinity (lemniscate of Bernoulli)
        const lemniscateX = Math.sin(angle + time) / (1 + Math.cos(angle + time) * Math.cos(angle + time))
        const lemniscateY =
          (Math.sin(angle + time) * Math.cos(angle + time)) / (1 + Math.cos(angle + time) * Math.cos(angle + time))

        // Scale and position
        const pointX = lemniscateX * size
        const pointY = lemniscateY * size

        if (firstPoint) {
          ctx.moveTo(pointX, pointY)
          firstPoint = false
        } else {
          ctx.lineTo(pointX, pointY)
        }
      }

      // Stroke the path
      ctx.stroke()
      ctx.restore()
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      // No cleanup needed for canvas animation
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <canvas ref={canvasRef} width={200} height={200} className="mb-4" />
      <p className="text-lg font-mono text-red-500 animate-pulse">LOADING INFINITE POSSIBILITIES...</p>
    </div>
  )
}

