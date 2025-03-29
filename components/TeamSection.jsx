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
  //     name: 'Dr Dinesh Goyal',
  //     image: '/team/the-DG.jpg',
  //     role: 'Principal and Director,piet',
  //     linkedin: 'https://www.linkedin.com/in/dr-payal-bansal',
  //     twitter: 'https://twitter.com/dr-payal-bansal'
  //   },
  //   {
  //     name: 'Dr Payal Bansal',
  //     image: '/team/payal.jpg',
  //     role: 'HOD, Idea Lab & IoT Department',
  //     linkedin: 'https://www.linkedin.com/in/dr-dinesh-goyal',
  //     twitter: 'https://twitter.com/dr-dinesh-goyal'
  //   }
  // ];

  // Team members data
  const teamMembers = {
    'Organizers': [
      { name: 'Hardik Jain', image: '/team/hardik-jain.jpg', role: 'Lead Organiser', linkedin: 'https://www.linkedin.com/in/jainhardik06/', twitter: 'https://x.com/jainhardik06' },
      { name: 'Sarthak Chopra', image: '/team/sarthak-chopra.jpg', role: 'Lead Organiser', linkedin: 'https://www.linkedin.com/in/sarthakchopra654', twitter: 'https://twitter.com/Sarthak654' },
      { name: 'Raghav Sharma', image: '/team/raghav-sharma.jpg', role: 'Organiser', linkedin: 'https://www.linkedin.com/in/raghavsharma098?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', twitter: 'https://x.com/raghav_sharma34?s=21' },
    ],
    'Tech': [
      { name: 'Aaditya Vinayak', image: '/team/Aadiii.jpg', role: 'Tech Lead', linkedin: 'https://linkedin.com/in/vaaditya320', twitter: 'https://twitter.com/vaaditya320' },
      { name: 'Sahaj Jain', image: 'https://avatars.githubusercontent.com/u/118066299?v=4', role: 'Tech Team', linkedin: 'https://www.linkedin.com/in/this-is-sahaj-jain/', twitter: 'https://twitter.com' },
      { name: 'Siddhika Agrawal', image: '/team/siddhika.jpg', role: 'Tech Team', linkedin: 'https://www.linkedin.com/in/siddhi-agrawal-566591229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/siddhi9352?t=14M_i0W-XaJ6-1eVr4tFww&s=09' },
    ],
    'PR': [
      { name: 'Palak Modi', image: '/team/palak-modi.jpg', role: 'PR Lead', linkedin: 'https://www.linkedin.com/in/palak-modi-413707332', twitter: 'https://x.com/Palakmodi09?t=svEaiIweetpUQsgu-E6b0g&s=09' },
      { name: 'Kuldeep Soni', image: '/team/kuldeep.jpg', role: 'PR Lead', linkedin: 'https://www.linkedin.com/in/kuldeep-soni-83b432293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/kul00035?t=wUgXlFSHHjfi4x7YYMjvxw&s=09' },
      { name: 'Dishu Choudhary', image: '/team/dishu-choudhary.jpg', role: 'PR Team', linkedin: 'https://www.linkedin.com/in/dishu-choudhary-008a40328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/dishu_2806_?t=hV3AaOVhFx_DeRqvQa6QIg&s=09' },
      { name: 'Ujjwal Dubey', image: '/team/ujjwal-dubey.jpg', role: 'PR Team', linkedin: 'https://www.linkedin.com/in/ujjwal-dubey-1921ba328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/UjjwalDube36317?t=2x9vPa8qyQRYVm8WDGnVJA&s=09' },
      { name: 'Vibhor Mathur', image: '/team/vibhor-mathur.jpg', role: 'Tech Team', linkedin: 'https://www.linkedin.com/in/viibhor-mathur-9905b9332/', twitter: 'https://x.com/vibhhormathur' },
      { name: 'Hariom Choudhary', image: '/team/hariom.jpg', role: 'PR Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },   
      
      
      
    ],
    'Designing': [
      { name: 'Suhani Bansal', image: '/team/suhani-bansal.jpg', role: 'Design Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Arpit Garg', image: '/team/arpit.jpg', role: 'Design Lead', linkedin: 'https://www.linkedin.com/in/arpitgarg5689', twitter: 'https://x.com/Arpitgarg5689' },
      { name: 'Krati Saini', image: '/team/krati-saini.jpg', role: 'Design Team', linkedin: 'https://www.linkedin.com/in/krati-saini-2b3016327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/krati_sain11?t=GjIUUpkizQqdOpreU-uCtQ&s=09' },
      { name: 'Harsh Sahu', image: '/team/harsh-sahu.jpg', role: 'Design Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
    ],
    'Content': [
      { name: 'Ridhi Jain', image: '/team/ridhi-jain.jpg', role: 'Content Lead', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Khushi Gupta', image: '/team/Khushi-Gupta.jpg', role: 'Content Lead', linkedin: 'https://www.linkedin.com/in/khushi-gupta-ab07a12a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/Khusii27?t=WRhppsuMj2UfExupGaQR-Q&s=09' },
      { name: 'Himanshu Gaud', image: '/team/himanshu-gaud.jpg', role: 'Content Team', linkedin: 'https://www.linkedin.com/in/himanshu-gaud-50a5b4327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/himanshu_g75540?t=HBPj0GaMbQWm16ve-ujtXQ&s=09' },
      { name: 'Palak Agarwal', image: '/team/palak-agrawal.jpg', role: 'Content Team', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
      { name: 'Ankit Rao', image: '/team/ankit-rao.jpg', role: 'Tech Team', linkedin: 'https://www.linkedin.com/in/ankit-rao-190427327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/__raoankitt__?s=09' },
    ],
    'Advisory': [
      { name: 'Kartik Mehta', image: '/team/kartik-mehta.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/kartik-mehta-6729b0255/', twitter: 'https://twitter.com/kartikmehta_png' },
      { name: 'Manish Vaishnav', image: '/team/manish.png', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/manish-vaishnav-4659b0256/', twitter: 'https://twitter.com' },
      { name: 'Mayank Saini', image: '/team/mayank-saini.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/mayanksaini21?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/MayankSaini21?t=jpFQ4_JCZVLI2gKSIg7Z9w&s=09' },
      { name: 'Kartikey Sharma', image: '/team/kartikey-sharma.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/kartikey-sharma-aa0183264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: 'https://x.com/Kartikeyk424?t=Ya6bkL0NPP3zRhfht4e8mg&s=09' },
      { name: 'Aditya Pareek', image: '/team/aditya-pareek.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/aditya-pareek-4291a1258/', twitter: 'https://x.com/Aditya4289' },
      { name: 'Himani Jangid', image: '/team/himani jangid.jpg', role: 'Advisor', linkedin: 'https://www.linkedin.com/in/himanijangid07/', twitter: 'https://x.com/himanijangid07?t=N6qGTFl5IQygCz-xfdRI3g&s=09' },
      { name: 'Naman Sharma', image: '/team/naman-sharma.jpg', role: 'Advisor', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
    ]
  };

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