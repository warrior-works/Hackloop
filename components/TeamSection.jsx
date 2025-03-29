import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import TiltedCard from './TiltedCard';
import FloatingParticles from './FloatingParticles';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('Organizers');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  // Faculty coordinators data
  // const facultyCoordinators = [
  //   {
  //     name: 'aashuu',
  //     image: '/team/aashuu.jpg',
  //     role: 'Principal and Director',
  //     linkedin: '#',
  //     twitter: '#'
  //   },
  //   {
  //     name: 'aashuu',
  //     image: '/team/aashuu.jpg',
  //     role: 'Principal and Director',
  //     linkedin: '#',
  //     twitter: '#'
  //   }
  // ];

  // Team members data
  const teamMembers = {
    'Organizers': [
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Lead Organiser', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Lead Organiser', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Organiser', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
    ],
    'Tech': [
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Tech Lead', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Tech Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Tech Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
    ],
    'PR': [
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'PR Lead', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'PR Lead', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'PR Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'PR Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },   
      
      
      
    ],
    'Designing': [
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Design Lead', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Design Lead', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Design Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Design Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
    ],
    'Content': [
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Content Lead', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Content Lead', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Content Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Content Team', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
    ],
    'Advisory': [
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
      { name: 'aashuu', image: '/team/aashuu.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/ashutoshkumaraashu/', twitter: 'https://twitter.com/warrior_aashuu' },
    ]
  };

  // Card content
  const CardContent = ({ member }) => (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
        {member.name}
      </h3>
      <p className="text-gray-400 mb-4">{member.role}</p>
      <div className="flex gap-3">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 
            text-black font-medium transition-all duration-300 hover:from-yellow-500 hover:to-orange-500
            hover:shadow-lg hover:shadow-orange-500/30"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 
            text-black font-medium transition-all duration-300 hover:from-yellow-500 hover:to-orange-500
            hover:shadow-lg hover:shadow-orange-500/30"
        >
          <FaXTwitter className="text-xl" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-black to-orange-950/20 text-white px-4 py-16 overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0">
        <FloatingParticles />
      </div>

      <div className="max-w-7xl mx-auto relative space-y-16">
        {/* Decorative elements */}
        <div className="absolute inset-0 grid grid-cols-2 -z-10 pointer-events-none">
          <div className="bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl h-96 w-96 -translate-y-1/2"></div>
          <div className="bg-gradient-to-bl from-yellow-500/5 to-transparent rounded-full blur-3xl h-96 w-96 translate-x-1/2"></div>
        </div>

        {/* Faculty Coordinators Section */}
        {/* <motion.div
          className="mb-24"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Faculty Coordinators
          </h2>
          
          <div className="flex justify-center w-full">
            <motion.div 
              className="inline-grid grid-cols-2 lg:grid-cols-4 gap-6 pb-12 place-items-center justify-center"
              style={{
                maxWidth: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                '@media screen and (maxWidth: 1024px)': {
                  gridTemplateColumns: 'repeat(2, minmax(250px, 1fr))'
                }
              }}
              variants={containerVariants}
            >
              {facultyCoordinators.map((faculty, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <TiltedCard
                    imageSrc={faculty.image}
                    altText={faculty.name}
                    captionText={`${faculty.name} - ${faculty.role}`}
                    containerHeight="300px"
                    imageHeight="200px"
                    imageWidth="200px"
                    overlayContent={<CardContent member={faculty} />}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div> */}

        {/* Core Team Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="mb-16"
        >
          <h2 id='team' className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Meet the Core Team
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {Object.keys(teamMembers).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                  ${activeTab === tab 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg shadow-orange-500/20' 
                    : 'bg-orange-950/20 text-gray-400 hover:text-white hover:bg-orange-900/20'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Team Members Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="w-full"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
                <div className="flex justify-center w-full">
                  <motion.div 
                    className="inline-grid grid-cols-2 lg:grid-cols-4 gap-12 pb-12 place-items-center justify-center"
                    style={{
                      maxWidth: '100%',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      '@media screen and (maxWidth: 1024px)': {
                        gridTemplateColumns: 'repeat(2, minmax(250px, 1fr))'
                      }
                    }}
                  >
                    {teamMembers[activeTab].map((member, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <TiltedCard
                          imageSrc={member.image}
                          altText={member.name}
                          captionText={`${member.name} - ${member.role}`}
                          containerHeight="300px"
                          imageHeight="200px"
                          imageWidth="200px"
                          overlayContent={<CardContent member={member} />}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;