import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Grid, Card, CardContent, CardActionArea, Container, Chip, Stack, useTheme } from '@mui/material';
import { Computer, Language, EmojiObjects, Wifi } from '@mui/icons-material';

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const glowVariants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const Theme = () => {
  const theme = useTheme();

  const themes = [
    {
      title: "Artificial Intelligence",
      description: "Develop AI solutions that solve real-world problems and enhance human capabilities.",
      icon: <Computer />,
      teams: 129,
      color: "#FF4444"
    },
    {
      title: "Web3 & Blockchain",
      description: "Build decentralized applications that redefine digital ownership and transform industries.",
      icon: <Language />,
      teams: 87,
      color: "#FFBB33"
    },
    {
      title: "Open Innovation",
      description: "Surprise us with your creativity in any tech domain. No boundaries, pure innovation.",
      icon: <EmojiObjects />,
      teams: 72,
      color: "#FF4444"
    },
    {
      title: "Internet of Things",
      description: "Connect the physical and digital worlds through smart devices and innovative IoT applications.",
      icon: <Wifi />,
      teams: 93,
      color: "#FFBB33",
      isBounty: true
    }
  ];

  return (
    <Box id="themes"
      sx={{
        position: 'relative',
        py: 12,
        px: 2,
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #000000, #181818)',
        color: 'white'
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        variants={glowVariants}
        initial="initial"
        animate="animate"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #FF4444, transparent)'
        }}
      />
      <Box
        component={motion.div}
        variants={glowVariants}
        initial="initial"
        animate="animate"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #FFBB33, transparent)'
        }}
      />

      {/* Particle effect */}
      {[...Array(15)].map((_, index) => (
        <Box
          key={index}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: index % 2 === 0 ? '#FF4444' : '#FFBB33',
            opacity: 0.2
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + index % 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5
          }}
          style={{
            // Use static positioning to avoid hydration errors
            top: `${15 + (index * 7) % 70}%`,
            left: `${10 + (index * 11) % 80}%`
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section header */}
        <Box
          component={motion.div}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Chip
            label="EXPLORE THE POSSIBILITIES"
            variant="outlined"
            size="small"
            icon={
              <Box
                component={motion.div}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#FF4444',
                  mr: 1
                }}
              />
            }
            sx={{
              mb: 3,
              fontFamily: 'monospace',
              border: '1px solid rgba(255, 68, 68, 0.2)',
              background: 'linear-gradient(to right, rgba(255, 68, 68, 0.1), rgba(255, 187, 51, 0.1))',
              color: '#FF4444'
            }}
          />
          
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #FF4444, #FFBB33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontSize: {
                xs: '2rem',    // for extra-small devices
                sm: '2.5rem',  // for small devices
                md: '3rem',    // for medium devices
                lg: '3.5rem'   // for large devices
              },
              wordBreak: 'break-word',
              lineHeight: 1.2
            }}
          >
            HACKATHON THEMES
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'grey.400',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            This year's hackathon focuses on pushing the boundaries of what's possible. Choose one theme or combine multiple to create something extraordinary.
          </Typography>
        </Box>

        {/* Themes grid */}
        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {themes.map((theme, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover="hover"
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(to bottom right, #000000, #181818)',
                    border: '1px solid rgba(48, 48, 48, 0.8)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${theme.color}80`,
                      boxShadow: `0 8px 16px -2px ${theme.color}20`
                    },
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex'
                  }}
                >
                  <CardActionArea sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column' }}>
                    {/* Hover glow effect */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `radial-gradient(circle at 50% 50%, ${theme.color}20, transparent 70%)`,
                        zIndex: 0
                      }}
                    />
                    
                    <CardContent sx={{ 
                      flex: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      height: '100%',
                      p: '0 !important'
                    }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: `${theme.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          color: theme.color,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: `${theme.color}30`
                          }
                        }}
                      >
                        {theme.icon}
                      </Box>
                      
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          mb: 1,
                          fontWeight: 'bold',
                          color: '#FFBB33',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: '#FFCC66'
                          },
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          minHeight: '32px',
                          lineHeight: 1.2
                        }}
                      >
                        {theme.title}
                        {theme.isBounty && (
                          <Chip
                            label="SPECIAL BOUNTY"
                            size="small"
                            sx={{
                              backgroundColor: `${theme.color}20`,
                              color: theme.color,
                              fontSize: '0.6rem',
                              height: '20px',
                              flexShrink: 0
                            }}
                          />
                        )}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'grey.400',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: 1.5
                        }}
                      >
                        {theme.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Theme;