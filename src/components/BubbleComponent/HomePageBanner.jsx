import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import potskin from '../../assets/potrait-skin.jpg';
import makeup from '../../assets/make-up.jpg';
import hair from '../../assets/hair.jpg';
import aloevera from '../../assets/aloe-vera.jpg';
import homeBanner from '../../assets/Home-banner.jpg'; // Make sure this path is correct

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh', // Explicit height
  width: '100%', // Full width
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${homeBanner})`, // Make sure homeBanner is correctly imported
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.2)', // Reduce the brightness (0.5 means 50% brightness)
    zIndex: -1, // Ensure the background image stays behind content
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  color: 'white',
  textAlign: 'center',
  width: '100%',
  padding: '0 20px',
}));

// "Elevate Your Beauty" text styling
const TopText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '20%', // Default for larger screens
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  fontFamily: "'Poppins', cursive",
  textShadow: '0 0 10px rgba(255,255,255,0.5)',
  marginBottom: theme.spacing(3),
  color: 'white',
  fontWeight: '700',
  
  // Use responsive typography for different screen sizes
  fontSize: '3.5rem', // Default size for large screens

  [theme.breakpoints.down('md')]: {
    top: '15%', // Adjust top margin for smaller laptop screens
    fontSize: '2.5rem', // Adjust font size for smaller laptops
  },

  [theme.breakpoints.down('sm')]: {
    top: '10%', // Adjust top margin for mobile devices
    fontSize: '2.5rem', // Adjust font size for mobile screens
  },
}));

// Container for "Experience luxury pampering..." text and button
const BottomContent = styled(Box)(({ theme }) => ({
  position: 'absolute', 
  top: '35%', // Positioned below "Elevate Your Beauty" in desktop view (default)
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',

  // Adjust the positioning for mobile view
  [theme.breakpoints.down('sm')]: {
    top: 'auto', // Remove top positioning
    bottom: '10%', // Move to the bottom (10% from bottom) in mobile view
    transform: 'translateX(-50%)', // Only horizontally centered
  },
}));



const GlowingText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Monoton', cursive",
  textShadow: '0 0 10px rgba(255,255,255,0.5)',
  marginBottom: theme.spacing(3),
  color: 'white',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Mate SC', serif",
  background: 'linear-gradient(45deg, #6A1B9A 30%, #9C27B0 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(106, 27, 154, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #9C27B0 30%, #6A1B9A 90%)',
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: '#EDE7F6',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  padding: '10px 20px',
  borderRadius: 3,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: 'rgba(156, 39, 176, 0.1)',
  },
}));

const HomePageBanner = () => {
  return (
    <BannerContainer>
      <HeroBanner>
        {/* <ContentBox>
          <GlowingText variant="h2" component="h1" gutterBottom>
            Elevate Your Beauty
          </GlowingText>
          <Typography variant="h5" color='#4A148C' paragraph sx={{ fontFamily: "'Protest Guerrilla', sans-serif" }}>
            Experience luxury pampering at our premier beauty salon
          </Typography>
          <StyledNavLink to="/appointment" end>
            <StyledButton variant="contained">
              Book Appointment
            </StyledButton>
          </StyledNavLink>
        </ContentBox> */}
          {/* "Elevate Your Beauty" should always be at the top with a 20% margin */}
          <TopText variant="h2" component="h1" gutterBottom>
          Elevate Your Beauty
        </TopText>

        <BottomContent>
          <Typography variant="h5" color='white' paragraph sx={{ fontFamily: "'Protest Guerrilla', sans-serif" }}>
            Experience luxury pampering at our premier beauty salon
          </Typography>
          <StyledNavLink to="/appointment" end>
            <StyledButton variant="contained" sx={{fontFamily : 'Poppins'}}>
              Book Now
            </StyledButton>
          </StyledNavLink>
        </BottomContent>
      </HeroBanner>
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom color="#4A148C" sx={{ fontFamily: "Protest Guerrilla" }}>
          Our Signature Services
        </Typography>
        <Typography variant="body1" align="center" paragraph color="#6A1B9A" sx={{ fontFamily: "'Mate SC', serif" }}>
          At Elevate Beauty Salon, we offer a wide range of premium services to enhance your natural beauty and leave you feeling refreshed and confident.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4, p: 2 }}>
          {[
            { title: "Skincare Essentials", image: potskin, description: "Nourish your skin with our range of gentle yet effective skincare products." },
            { title: "Makeup Magic", image: makeup, description: "Express yourself with our vibrant and long-lasting makeup collection." },
            { title: "Haircare Essentials", image: hair, description: "Revitalize your hair with our expert treatments for healthy, shiny, and nourished locks." },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardMedia
                  component="img"
                  height="350"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{fontFamily: 'Poppins'}}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </BannerContainer>
  );
};

export default HomePageBanner;
