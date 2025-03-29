import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random initial position
      y: Math.random() * 100,
      size: Math.random() * 25 + 15, // Random size between 15-40
      duration: Math.random() * 20 + 15, // Random animation duration
      delay: Math.random() * 5, // Random delay for start
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 15px 2px rgba(234, 88, 12, 0.2)',
          }}
          animate={{
            x: [
              0,
              Math.random() * 50 - 25, // Reduced movement range
              Math.random() * 50 - 25,
              Math.random() * 50 - 25,
              0,
            ],
            y: [
              0,
              Math.random() * 50 - 25,
              Math.random() * 50 - 25,
              Math.random() * 50 - 25,
              0,
            ],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.4, 0.6, 0.4, 0.6, 0.4],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/30 to-yellow-500/30 blur-sm" />
          {/* Middle glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-orange-500/15 to-yellow-500/15 blur-md" />
          {/* Outer glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-orange-500/10 to-yellow-500/10 blur-lg" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles; 