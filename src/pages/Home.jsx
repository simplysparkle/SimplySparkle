// HomePage.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ServiceProvided from '../components/ServiceProvided/ServiceProvided';
import HomePageBanner from '../components/BubbleComponent/HomePageBanner';

const Home = () => {
  return (
    // <Container maxWidth="lg">
    <Container maxWidth="100%" style={{padding: "0px"}} >
        <HomePageBanner/>
      {/* <Box sx={{ bgcolor: '#f8bbd0', p: 8, textAlign: 'center', borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#6a1b9a' }}>
          It's your time to shine
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'black', mb: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
          Book Now
        </Button>
      </Box> */}
       <Typography variant="h4" align="center" paragraph color="#6A1B9A" sx={{ fontFamily: "'Mate SC', serif" }}>
        Service Available
        </Typography>      
        <ServiceProvided />
    </Container>
  );
};

export default Home;
