import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, useTheme } from '@mui/material';
import { Spa, Star, EmojiEvents } from '@mui/icons-material';
import MapPointer from '../components/MapPointer';
import SocialMediaContainer from '../components/SocialMediaContainer';

const About = () => {
  const theme = useTheme();

  const cardGradients = [
    'linear-gradient(135deg, #4A0E4E 0%, #9C27B0 100%)',
    'linear-gradient(135deg, #311B92 0%, #673AB7 100%)',
    'linear-gradient(135deg, #6A1B9A 0%, #AB47BC 100%)'
  ];

  return (
    <Container sx={{ mt: 4, position: 'relative' }}>
      {/* Section 1: About Us */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #6a1b9a 30%, #9c27b0 90%)',
          color: 'white',
          py: 6,
          textAlign: 'center',
          borderRadius: 4,
          boxShadow: '0 3px 5px 2px rgba(106, 27, 154, .3)',
          mb: 6,
        }}
      >
        <Typography variant="h2" gutterBottom fontWeight="bold">
          Simple Sparkle
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '700px', mx: 'auto', mt: 2, px: 2 }}>
          Experience luxury and rejuvenation at SimpleSparkle. Our team of expert stylists and beauty professionals are dedicated to making you look and feel extraordinary.
        </Typography>
      </Box>

      {/* Section 2: Our Services and Vision */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {[
          { icon: Spa, title: 'Our Vision' },
          { icon: Star, title: 'Why Choose Us' },
          { icon: EmojiEvents, title: 'Our Achievements' },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                boxShadow: theme.shadows[10],
                transition: 'all 0.3s ease-in-out',
                '&:hover': { 
                  transform: 'translateY(-10px)',
                  boxShadow: theme.shadows[20],
                },
                background: cardGradients[index],
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                flexGrow: 1,
                p: 4,
              }}>
                <item.icon sx={{ fontSize: 70, color: 'white', mb: 3 }} />
                <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  {index === 0 && "Redefining beauty with personalized treatments, premium products, and unparalleled expertise. We strive to make every visit an unforgettable experience."}
                  {index === 1 && (
                    <>
                      <Box component="span" sx={{ display: 'block', mb: 1 }}>✨ State-of-the-art facilities</Box>
                      <Box component="span" sx={{ display: 'block', mb: 1 }}>👩‍🎨 Top-tier professional stylists</Box>
                      <Box component="span" sx={{ display: 'block', mb: 1 }}>🌿 Eco-friendly beauty products</Box>
                      <Box component="span" sx={{ display: 'block' }}>🏆 Award-winning service</Box>
                    </>
                  )}
                  {index === 2 && "Recognized for excellence in the beauty industry with multiple awards for our innovative treatments and exceptional customer service."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <MapPointer />
      <SocialMediaContainer />
    </Container>
  );
};

export default About;