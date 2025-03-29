import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  useTheme
} from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DiamondIcon from "@mui/icons-material/Diamond";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Sponsors() {
  const theme = useTheme();

  // Sample sponsor data - replace with your actual sponsors
  const sponsors = {
    hosted_by: [
      { id: 1, name: "Host Organization", logo: "/piet.png?height=400&width=600", website: "https://piet.co.in" },
    ],
    platinum: [
      { id: 1, name: "Platinum Sponsor 1", logo: "/placeholder.svg?height=100&width=200", website: "#" },
      { id: 2, name: "Platinum Sponsor 2", logo: "/placeholder.svg?height=100&width=200", website: "#" },
    ],
    gold: [
      { id: 1, name: "Gold Sponsor 1", logo: "/sponsors/ox.png", website: "https://0x.day" },
      { id: 2, name: "Gold Sponsor 2", logo: "/sponsors/innovact.png", website: "https://innovact.in" },
    ],
    silver: [
      { id: 1, name: "Silver Sponsor 1", logo: "/sponsors/xyz.png", website: "https://xyz.com" },
      { id: 2, name: "Silver Sponsor 2", logo: "/sponsors/codecrafter.png", website: "https://codecrafters.io" },
      { id: 3, name: "Silver Sponsor 3", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxT6W2J3-40UX9t2ELVsd2lBlaVIsMk63iKQ&s", website: "https://interviewbuddy.net" },
    ],
    community: [
      { id: 4, name: "Community Partner 3", logo: "/sponsors/cyborgs.png", website: "https://bento.me/thecyborgs" },
      { id: 1, name: "Community Partner 1", logo: "/cp/CSquareWhite.png", website: "#" },
      { id: 2, name: "Community Partner 2", logo: "/cp/devdisplay.png", website: "#" },
      { id: 3, name: "Community Partner 3", logo: "/cp/Kaizen.jpg", website: "#" },

    ],
    previous: [
      { id: 1, name: "accenture", logo: "/hackthon/accenture.png?height=100&width=200", website: "#" },
      { id: 2, name: "Aryavart", logo: "/hackthon/af.png?height=100&width=200", website: "#" },
      { id: 3, name: "Coding Tale", logo: "/hackthon/ct.png?height=100&width=200", website: "#" },
      { id: 4, name: "Durdarshan", logo: "/hackthon/durdarshan.png?height=100&width=200", website: "#" },
      { id: 5, name: "H2S", logo: "/hackthon/h2s.png?height=100&width=200", website: "#" },
      { id: 6, name: "Aerophantom", logo: "/hackthon/ap.png?height=100&width=200", website: "#" },
      { id: 7, name: "IBM", logo: "/hackthon/ibm.png?height=100&width=200", website: "#" },
      { id: 8, name: "Local Eyes", logo: "/hackthon/le.png?height=100&width=200", website: "#" },
      { id: 9, name: "moe", logo: "/hackthon/moe.png?height=100&width=200", website: "#" },
      { id: 12, name: "rgb", logo: "/hackthon/rgb.png?height=100&width=200", website: "#" },
      { id: 13, name: "rm", logo: "/hackthon/rm.png?height=100&width=200", website: "#" },
      { id: 14, name: "tt", logo: "/hackthon/tt.png?height=100&width=200", website: "#" },
      { id: 15, name: "vg", logo: "/hackthon/vg.png?height=100&width=200", website: "#" },
      { id: 16, name: "yi", logo: "/hackthon/yi.png?height=100&width=200", website: "#" }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        type: "spring",
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  // Animation for sliding sponsors
  const slideVariants = {
    animate: {
      x: [0, -2400], // Width of one complete set of sponsors
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  // Triple the previous sponsors array for seamless loop
  const duplicatedPreviousSponsors = [...sponsors.previous, ...sponsors.previous, ...sponsors.previous];

  // Custom styled section title component
  const SectionTitle = ({ title }) => (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 5 }}>
        <Box sx={{ 
          width: "40px", 
          height: "3px", 
          backgroundColor: "#ef4444",
          mr: 2 
        }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography 
            variant="h2"
            sx={{ 
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "white",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.2
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ 
          width: "40px", 
          height: "3px", 
          backgroundColor: "#ef4444",
          ml: 2 
        }} />
      </Box>
    </motion.div>
  );

  // Sponsor card component
  const SponsorCard = ({ logo, name, tier, website, isPrevious }) => {
    const getBorderColor = () => {
      switch (tier) {
        case 'hosted': return 'linear-gradient(to right, #FF5733, #FF8C33)';
        case 'platinum': return 'linear-gradient(to right, #E5E4E2, #FFFFFF)';
        case 'gold': return 'linear-gradient(to right, #FFD700, #FFC300)';
        case 'silver': return 'linear-gradient(to right, #C0C0C0, #E8E8E8)';
        default: return 'linear-gradient(to right, #333333, #555555)';
      }
    };

    const getImageSize = () => {
      switch (tier) {
        case 'hosted':
          return {
            maxWidth: "500px",
            maxHeight: "300px",
            width: "100%",
            objectFit: "contain"
          };
        case 'gold':
        case 'silver':
          return {
            maxWidth: "250px",
            maxHeight: "150px",
            width: "100%",
            objectFit: "contain"
          };
        default:
          return {
            maxWidth: "250px",
            maxHeight: "150px",
            width: "100%",
            objectFit: "contain"
          };
      }
    };

    const CardWrapper = (
      <Card sx={{
        background: "rgba(17, 17, 17, 0.7)",
        border: "1px solid rgba(255, 87, 51, 0.3)",
        borderRadius: 2,
        padding: tier === 'hosted' ? 2 : 2,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        cursor: isPrevious ? "default" : "pointer",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: getBorderColor()
        }
      }}>
        <CardContent sx={{ padding: 2, textAlign: "center" }}>
          <Box
            component="img"
            src={logo}
            alt={name}
            sx={{
              ...getImageSize(),
              filter: "brightness(0.9)",
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "brightness(1.2)"
              }
            }}
          />
        </CardContent>
      </Card>
    );

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        {isPrevious ? (
          CardWrapper
        ) : (
          <Link href={website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            {CardWrapper}
          </Link>
        )}
      </motion.div>
    );
  };

  return (
    <Box
      id="sponsors"
      sx={{
        position: "relative",
        py: 10,
        background: "linear-gradient(to bottom, #000000, #111111)",
        overflow: "hidden"
      }}
    >
      {/* Background effects */}
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: [i * 30, i * 30 + 700],
              opacity: [0.3, 0],
              scale: [1, 1.5]
            }}
            transition={{
              duration: 15 + i,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: i * 2
            }}
            sx={{
              position: "absolute",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#FF5733",
              left: `${i * 5}%`
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Sponsors Section */}

        <SectionTitle title="Our Sponsors" />

        <Typography
          className="text-white"
          variant="subtitle1"
          align="center"
          sx={{
            color: "text.secondary",
            maxWidth: "700px",
            mx: "auto",
            mb: 8,
            opacity: 0.7
          }}
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          These industry leaders make our hackathon possible through their generous support and commitment to innovation.
        </Typography>

        {/* Hosted By Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 2,
              textAlign: "center",
              color: "white"
            }}
          >
            HOSTED BY
          </Typography>

          <Grid container spacing={1} justifyContent="center">
            {sponsors.hosted_by.map(host => (
              <Grid item xs={12} sm={8} md={6} key={host.id}>
                <SponsorCard logo={host.logo} name={host.name} tier="hosted" website={host.website} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Platinum Sponsors
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "white"
            }}
          >
            PLATINUM SPONSORS
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {sponsors.platinum.map(sponsor => (
              <Grid item xs={12} sm={6} md={4} key={sponsor.id}>
                <SponsorCard logo={sponsor.logo} name={sponsor.name} tier="platinum" />
              </Grid>
            ))}
          </Grid>
        </Box> */}

        {/* Gold Sponsors */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "white"
            }}
          >
            GOLD SPONSORS
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {sponsors.gold.map(sponsor => (
              <Grid item xs={6} sm={4} md={3} key={sponsor.id}>
                <SponsorCard logo={sponsor.logo} name={sponsor.name} tier="gold" website={sponsor.website} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Silver Sponsors */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "white"
            }}
          >
            SILVER SPONSORS
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {sponsors.silver.map(sponsor => (
              <Grid item xs={6} sm={3} md={3} key={sponsor.id}>
                <SponsorCard logo={sponsor.logo} name={sponsor.name} tier="silver" website={sponsor.website} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Community Partners Section */}
        <SectionTitle title="Community Partners" />

        <Box
          mb={12}
          sx={{
            overflow: "hidden",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background: "linear-gradient(to left, #000000, transparent)",
              zIndex: 2
            },
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background: "linear-gradient(to right, #000000, transparent)",
              zIndex: 2
            }
          }}
        >
          <motion.div
            variants={slideVariants}
            animate="animate"
            style={{
              display: "flex",
              width: "fit-content",
              gap: "16px"
            }}
          >
            {[...sponsors.community, ...sponsors.community, ...sponsors.community].map((partner, index) => (
              <Box
                key={`${partner.id}-${index}`}
                sx={{
                  minWidth: "200px",
                  px: 2,
                }}
              >
                <SponsorCard logo={partner.logo} name={partner.name} website={partner.website} />
              </Box>
            ))}
          </motion.div>
        </Box>

        {/* Previous Sponsors Section */}
        <SectionTitle title="Previous Sponsors" />

        <Box
          mb={12}
          sx={{
            overflow: "hidden",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background: "linear-gradient(to left, #000000, transparent)",
              zIndex: 2
            },
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background: "linear-gradient(to right, #000000, transparent)",
              zIndex: 2
            }
          }}
        >
          <motion.div
            variants={slideVariants}
            animate="animate"
            style={{
              display: "flex",
              width: "fit-content",
              gap: "16px"
            }}
          >
            {duplicatedPreviousSponsors.map((sponsor, index) => (
              <Box
                key={`${sponsor.id}-${index}`}
                sx={{
                  minWidth: "200px",
                  px: 2,
                }}
              >
                <SponsorCard logo={sponsor.logo} name={sponsor.name} website={sponsor.website} isPrevious={true} />
              </Box>
            ))}
          </motion.div>
        </Box>

        {/* Become a Sponsor/Partner CTA - Modified to have two separate buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <Typography variant="h4" component="h3" align="center" sx={{
                  mb: 4,
                  color: "white",
                  fontWeight: "bold"
                }}>
                  Join Our Mission to Empower Innovation
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                <Link href="https://drive.google.com/file/d/1-8mj1j2CPinWE5YPJLZgBoq-P6quoh5w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      background: "linear-gradient(to right, #ef4444, #f97316)",
                      color: "white",
                      border: "none",
                      "&:hover": {
                        background: "linear-gradient(to right, #dc2626, #ea580c)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 20px rgba(239, 68, 68, 0.2)"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    Become a Sponsor
                  </Button>
                </Link>
                <Link href="https://lu.ma/40abgjcr" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      borderColor: "#ef4444",
                      color: "#ef4444",
                      "&:hover": {
                        borderColor: "#f97316",
                        color: "#f97316",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 20px rgba(239, 68, 68, 0.1)"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    Become a Community Partner
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}


export default Sponsors;
