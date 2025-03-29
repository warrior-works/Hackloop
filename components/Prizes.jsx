"use client"
import { motion } from "framer-motion"
import { Trophy, IndianRupee, Briefcase, Smartphone, Cloud, Monitor, Building, Wifi } from "lucide-react"
import dynamic from "next/dynamic"
import { FaCode, FaGlobe, FaCoins, FaGift } from "react-icons/fa"
import { MdMemory, MdGroupAdd, MdRestaurant } from "react-icons/md"
import { GiProgression } from "react-icons/gi"
import { BsFillAwardFill } from "react-icons/bs"

// Dynamically import ParticleComponent with no SSR to avoid hydration issues
// const ParticleComponent = dynamic(() => import("./particle-component"), { ssr: false })

export default function Prizes() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const prizes = [
    {
      place: "1ST PLACE",
      title: "GRAND PRIZE",
      color: "#FFB800",
      icon: <Trophy className="w-12 h-12" />,
      rewards: [
        { icon: <IndianRupee />, text: "₹40,000 Cash Prize" },
        { icon: <FaCode />, text: "2 Years Code Crafters Subscription" },
        { icon: <FaGlobe />, text: "1 Year .xyz Domain" },
      ],
    },
    {
      place: "2ND PLACE",
      title: "RUNNER-UP",
      color: "#C0C0C0",
      icon: <Trophy className="w-12 h-12" />,
      rewards: [
        { icon: <IndianRupee />, text: "₹30,000 Cash Prize" },
        { icon: <FaCode />, text: "1 Year Code Crafters Subscription" },
        { icon: <FaGlobe />, text: "1 Year .xyz Domain" },
      ],
    },
    {
      place: "3RD PLACE",
      title: "THIRD PRIZE",
      color: "#CD7F32",
      icon: <Trophy className="w-12 h-12" />,
      rewards: [
        { icon: <IndianRupee />, text: "₹20,000 Cash Prize" },
        { icon: <FaCode />, text: "6 Months Code Crafters Subscription" },
        { icon: <FaGlobe />, text: "1 Year .xyz Domain" },
      ],
    },
  ]

  const specialPrizes = [
    {
      place: "SPECIAL PRIZE",
      title: "BEST BUSINESS IDEA",
      color: "#4CAF50",
      icon: <Building className="w-12 h-12" />,
      rewards: [
        // { icon: <IndianRupee />, text: "₹5,000 Cash Prize" },
        { icon: <GiProgression />, text: "Startup Incubation Opportunities" },
        { icon: <FaCoins />, text: "Funding & Grants up to ₹10 Lakhs" },
      ],
    },
    {
      place: "SPECIAL PRIZE",
      title: "HARDWARE BOUNTY",
      color: "#2196F3",
      icon: <Wifi className="w-12 h-12" />,
      rewards: [
        { icon: <IndianRupee />, text: "₹10,000 Cash Prize" },
        { icon: <MdMemory className="w-5 h-5" />, text: "IoT Development Kit" },
        { icon: <MdGroupAdd />, text: "Mentorship Program" },
      ],
    },
  ]

  return (
    <div id="prizes" className="relative py-20 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* Particles Background */}
      {/* <ParticleComponent /> */}

      {/* PCB Lines Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <PCBBackground />
      </div>

      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/tbg.png.svg?height=800&width=1600')` }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={titleVariants} className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4 inline-block" />
              PRIZES & AWARDS
              <span className="w-8 h-1 bg-red-500 ml-4 inline-block" />
            </motion.h2>

            <motion.p className="text-gray-400 max-w-3xl mx-auto">
              Exceptional innovation deserves exceptional rewards. Check out what you can win!
            </motion.p>
          </motion.div>

          {/* Main Prize Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {prizes.map((prize, index) => (
              <motion.div
                key={`main-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${prize.color}40`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-[rgba(20,20,20,0.8)] backdrop-blur-md rounded-xl overflow-hidden relative border h-full min-h-[500px] flex flex-col"
                style={{ borderColor: `${prize.color}40` }}
              >
                {/* Prize ribbon */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] overflow-hidden z-10">
                  <div
                    className="py-3 w-[200px] text-center font-bold text-black absolute top-[40px] right-[-40px] transform rotate-45 shadow-md"
                    style={{ backgroundColor: prize.color }}
                  >
                    {prize.place}
                  </div>
                </div>

                <div className="p-8 pt-12 h-full flex flex-col">
                  <motion.div
                    className="flex flex-col items-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative"
                      style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                    >
                      {prize.icon}
                      <div
                        className="absolute inset-0 rounded-full opacity-30 blur-xl"
                        style={{ backgroundColor: prize.color }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-bold text-center" style={{ color: prize.color }}>
                      {prize.title}
                    </h3>
                  </motion.div>

                  <div className="mb-6 h-px" style={{ backgroundColor: `${prize.color}30` }} />

                  <ul className="p-0 m-0 list-none flex-1 flex flex-col justify-start">
                    {prize.rewards.map((reward, i) => (
                      <li key={i} className="flex items-start gap-4 mb-4">
                        <div
                          className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                        >
                          {reward.icon}
                        </div>
                        <p className="text-gray-300 mt-1">{reward.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Prize Cards - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-12 justify-center max-w-4xl mx-auto">
            {specialPrizes.map((prize, index) => (
              <motion.div
                key={`special-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${prize.color}40`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-[rgba(20,20,20,0.8)] backdrop-blur-md rounded-xl overflow-hidden relative border h-full min-h-[500px] flex flex-col"
                style={{ borderColor: `${prize.color}40` }}
              >
                {/* Prize ribbon */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] overflow-hidden z-10">
                  <div
                    className="py-3 w-[200px] text-center font-bold text-black absolute top-[40px] right-[-40px] transform rotate-45 shadow-md"
                    style={{ backgroundColor: prize.color }}
                  >
                    {prize.place}
                  </div>
                </div>

                <div className="p-8 pt-12 h-full flex flex-col">
                  <motion.div
                    className="flex flex-col items-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 relative"
                      style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                    >
                      {prize.icon}
                      <div
                        className="absolute inset-0 rounded-full opacity-30 blur-xl"
                        style={{ backgroundColor: prize.color }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-bold text-center" style={{ color: prize.color }}>
                      {prize.title}
                    </h3>
                  </motion.div>

                  <div className="mb-6 h-px" style={{ backgroundColor: `${prize.color}30` }} />

                  <ul className="p-0 m-0 list-none flex-1 flex flex-col justify-start">
                    {prize.rewards.map((reward, i) => (
                      <li key={i} className="flex items-start gap-4 mb-4">
                        <div
                          className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${prize.color}20`, color: prize.color }}
                        >
                          {reward.icon}
                        </div>
                        <p className="text-gray-300 mt-1">{reward.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits Section */}
          <div className="text-center mb-8">
            <motion.h3 
              variants={titleVariants}
              className="text-2xl font-bold text-white mb-4 inline-flex items-center"
            >
              <span className="w-6 h-1 bg-red-500 mr-3 inline-block" />
              PERKS FOR ALL PARTICIPANTS
              <span className="w-6 h-1 bg-red-500 ml-3 inline-block" />
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Every participant will receive these amazing benefits to enhance their hackathon experience
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              {
                title: "Goodies & Swags",
                icon: <FaGift className="w-8 h-8" />,
                color: "#FF6B00",
                description: "Exclusive hackathon merchandise, stickers, and cool tech swag to remember your experience."
              },
              {
                title: "Certificates",
                icon: <BsFillAwardFill className="w-8 h-8" />,
                color: "#4CAF50",
                description: "Official certificates of participation and achievement to showcase your skills."
              },
              {
                title: "Meals & Accommodation",
                icon: <MdRestaurant className="w-8 h-8" />,
                color: "#2196F3",
                description: "Complimentary meals and comfortable accommodation throughout the hackathon."
              }
            ].map((benefit, index) => (
              <motion.div
                key={`benefit-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${benefit.color}40`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-[rgba(20,20,20,0.8)] backdrop-blur-md rounded-xl p-6 border relative overflow-hidden"
                style={{ borderColor: `${benefit.color}40` }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative"
                    style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}
                  >
                    {benefit.icon}
                    <div
                      className="absolute inset-0 rounded-full opacity-30 blur-xl"
                      style={{ backgroundColor: benefit.color }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: benefit.color }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 font-bold rounded-lg px-8 py-3 text-white hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-red-500/40 transition-all">
                  Register Now
                </button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// PCB Lines Background Component with orange circuit patterns
function PCBBackground() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 bg-black">
      <defs>
        <pattern id="pcb-grid" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Horizontal lines */}
          <path d="M 0 25 L 100 25" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 0 50 L 100 50" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 0 75 L 100 75" stroke="#FF6B00" strokeWidth="0.5" fill="none" />

          {/* Vertical lines */}
          <path d="M 25 0 L 25 100" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 50 0 L 50 100" stroke="#FF6B00" strokeWidth="0.5" fill="none" />
          <path d="M 75 0 L 75 100" stroke="#FF6B00" strokeWidth="0.5" fill="none" />

          {/* Circuit elements */}
          <circle cx="25" cy="25" r="3" fill="#FF6B00" />
          <circle cx="75" cy="75" r="3" fill="#FF6B00" />
          <circle cx="50" cy="50" r="3" fill="#FF6B00" />

          {/* Circuit paths */}
          <path d="M 25 25 L 50 25 L 50 50" stroke="#FF6B00" strokeWidth="1.5" fill="none" />
          <path d="M 50 50 L 75 50 L 75 75" stroke="#FF6B00" strokeWidth="1.5" fill="none" />
          <path d="M 25 25 L 25 75 L 50 75" stroke="#FF6B00" strokeWidth="1.5" fill="none" />

          {/* Additional circuit elements */}
          <rect x="47" y="47" width="6" height="6" fill="#FF6B00" />
          <rect x="22" y="22" width="6" height="6" fill="#FF6B00" />
          <rect x="72" y="72" width="6" height="6" fill="#FF6B00" />
        </pattern>
      </defs>

      {/* Apply the pattern */}
      <rect width="100%" height="100%" fill="url(#pcb-grid)" />

      {/* Animated elements */}
      <motion.circle
        cx="25%"
        cy="30%"
        r="5"
        fill="#FF6B00"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          r: [5, 8, 5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.circle
        cx="75%"
        cy="65%"
        r="5"
        fill="#FF6B00"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          r: [5, 8, 5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <motion.circle
        cx="50%"
        cy="80%"
        r="5"
        fill="#FF6B00"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          r: [5, 8, 5],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      {/* Pulse effect along paths */}
      <motion.circle
        cx="0"
        cy="0"
        r="3"
        fill="#FF9D4D"
        initial={{
          cx: "25%",
          cy: "25%",
          opacity: 0,
        }}
        animate={{
          cx: ["25%", "50%", "50%"],
          cy: ["25%", "25%", "50%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.circle
        cx="0"
        cy="0"
        r="3"
        fill="#FF9D4D"
        initial={{
          cx: "50%",
          cy: "50%",
          opacity: 0,
        }}
        animate={{
          cx: ["50%", "75%", "75%"],
          cy: ["50%", "50%", "75%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 2,
        }}
      />

      <motion.circle
        cx="0"
        cy="0"
        r="3"
        fill="#FF9D4D"
        initial={{
          cx: "25%",
          cy: "25%",
          opacity: 0,
        }}
        animate={{
          cx: ["25%", "25%", "50%"],
          cy: ["25%", "75%", "75%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 1,
        }}
      />
    </svg>
  )
}

