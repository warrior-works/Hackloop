"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  // Hackathon dates
  const startDate = new Date("2025-12-18T00:00:00")
  const endDate = new Date("2025-12-19T23:59:59")

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <section id="about" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <motion.span 
                className="w-8 h-1 bg-red-500 mr-4"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8 }}
              ></motion.span>
              ABOUT HACK LOOP
              <motion.span 
                className="w-8 h-1 bg-red-500 ml-4"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8 }}
              ></motion.span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              HackLoop is a global hackathon where innovation never stops—just like an infinite loop!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar className="text-red-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Event Date</h3>
                  <p className="text-gray-400">
                    {startDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - {" "}
                    {endDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">36 hours of non-stop innovation</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="text-amber-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-400">Stanford University</p>
                  <p className="text-gray-500 text-sm mt-2">United States</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="text-red-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Participants</h3>
                  <p className="text-gray-400">Still counting...</p>
                  <p className="text-gray-500 text-sm mt-2">From multiple institutes and universities</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About;