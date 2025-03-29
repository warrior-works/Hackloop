"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900/80 border border-red-500/30 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold text-white transform hover:scale-110 transition-all duration-300 hover:border-red-500/70">
          {timeLeft.days}
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">DAYS</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900/80 border border-amber-500/30 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold text-white transform hover:scale-110 transition-all duration-300 hover:border-amber-500/70">
          {timeLeft.hours}
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">HOURS</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900/80 border border-red-500/30 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold text-white transform hover:scale-110 transition-all duration-300 hover:border-red-500/70">
          {timeLeft.minutes}
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">MINUTES</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900/80 border border-amber-500/30 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold text-white transform hover:scale-110 transition-all duration-300 hover:border-amber-500/70">
          {timeLeft.seconds}
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">SECONDS</span>
      </div>
    </div>
  )
}

