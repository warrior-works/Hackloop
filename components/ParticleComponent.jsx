import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const ParticleComponent = () => {
  // Generate random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
          animate={{
            y: [-20, 20],
            x: [-20, 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: particle.duration,
              ease: "easeInOut",
              repeatType: "reverse",
            },
            x: {
              repeat: Infinity,
              duration: particle.duration * 1.3,
              ease: "easeInOut",
              repeatType: "reverse",
            },
            opacity: {
              repeat: Infinity,
              duration: particle.duration * 0.8,
              ease: "easeInOut",
              repeatType: "reverse",
            },
            delay: particle.delay,
          }}
        />
      ))}
    </Box>
  );
};

export default ParticleComponent; 