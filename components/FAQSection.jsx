"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Typography,
  Container,
  Box,
  useTheme,
  createTheme,
  ThemeProvider
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false)
  
  // Custom theme to match website
  const hackTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FF6B35', // Orange-red from the HACK logo
      },
      secondary: {
        main: '#FFB800', // Gold color from the infinity symbol
      },
      background: {
        default: '#121212',
        paper: '#090d15', // Changed from #1A1A1A to #090d15
      },
      text: {
        primary: '#ffffff',
        secondary: '#b0b0b0',
      },
      divider: 'rgba(255, 255, 255, 0.12)',
    },
  })

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const faqs = [
    {
      question: "Who can participate in Hackloop?",
      answer:
        "Hackloop is open to students and tech enthusiasts of all skill levels. Whether you're a beginner or an exp inerienced developer, you're welcome to join!",
    },
    {
      question: "Do I need to have a team to register?",
      answer:
        "Yes, you need to register as a  form a team before the event. Minimum two students in a team are compulsory and maximum four.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "You should bring your laptop, charger, any hardware you plan to use for your project, and personal items for the 36-hour event. We'll provide food, drinks, and a comfortable hacking environment.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, Hackloop is completely free to participate in. We believe in making innovation accessible to everyone.",
    },
    {
      question: "Will there be Wifi, food and accommodation?",
      answer:
        "Yes, WiFi, meals, and accommodation will be provided.High-speed internet access will be available throughout the event. We will provide meals throughout the event .Comfortable rest areas will be arranged for accommodation.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "That's okay! Hackathons are about learning and collaboration. We welcome participants with diverse skills including design, business, and project management. You'll learn a lot during the event!",
    },
  ]

  return (
    <section id="faq" className="relative py-10 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl md:text-4xl font-bold mb-4 inline-flex items-center">
            <span className="w-8 h-1 bg-red-500 mr-4"></span>
            FREQUENTLY ASKED QUESTIONS
            <span className="w-8 h-1 bg-red-500 ml-4"></span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Everything you need to know about Hack Infinity.</p>
        </div>

        <ThemeProvider theme={hackTheme}>
          <Box 
            sx={{ 
              width: '90%', // Makes the container take up 4/5 of the available width
              mx: 'auto', // Centers the container
              py: 8, 
              backgroundColor: 'transparent' 
            }}
          >
            <Box>
              {faqs.map((faq, index) => (
                <motion.div
                  key={`faq-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      mb: 2,
                      borderRadius: "8px",
                      boxShadow: expanded === `panel${index}` 
                        ? "0 10px 25px rgba(255,107,53,0.15)"
                        : "0 4px 6px rgba(0,0,0,0.2)",
                      "&:before": { display: "none" },
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      border: "1px solid",
                      borderColor: expanded === `panel${index}` 
                        ? hackTheme.palette.primary.main
                        : "rgba(9, 13, 21, 0)",
                      backgroundColor: expanded === `panel${index}` 
                        ? "rgba(9,13,21,0.05)" 
                        : "#090d15", // Changed from rgba(26,26,26,0.8) to #090d15
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon sx={{ color: hackTheme.palette.primary.main }} />
                      }
                      aria-controls={`panel${index}a-content`}
                      id={`panel${index}a-header`}
                    >
                      <Typography 
                        fontWeight={600} 
                        sx={{ 
                          color: expanded === `panel${index}` 
                            ? hackTheme.palette.primary.main 
                            : hackTheme.palette.text.primary 
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Typography color="text.secondary">
                            {faq.answer}
                          </Typography>
                        </motion.div>
                      </AnimatePresence>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </section>
  )
}