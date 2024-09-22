import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const services = [
  { name: 'Eyebrow Threading', image: 'https://via.placeholder.com/500' },
  { name: 'Skin Care', image: 'https://via.placeholder.com/500' },
  { name: 'Bridal Services', image: 'https://via.placeholder.com/500' },
  { name: 'Pedicure', image: 'https://via.placeholder.com/500' },
  { name: 'Facials', image: 'https://via.placeholder.com/500' },
  { name: 'Haircut', image: 'https://via.placeholder.com/500' },
  { name: 'BlowDry', image: 'https://via.placeholder.com/500' },
  { name: 'Balayage', image: 'https://via.placeholder.com/500' },
  { name: 'Body Waxing', image: 'https://via.placeholder.com/500' },
  { name: 'Massage', image: 'https://via.placeholder.com/500' },
];

// Styled components for the card transformations
const CarouselWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '20px',
  margin: '0 auto',
}));

// Make sure to access the theme properly
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '300px',
  height: '400px',
  boxShadow: theme.shadows ? theme.shadows[3] : '0px 1px 3px rgba(0, 0, 0, 0.2)', // Fallback shadow
  transition: 'transform 0.3s ease, opacity 0.3s ease',
}));

const CenterCard = styled(StyledCard)({
  transform: 'scale(1.1)',
  opacity: 1,
});

const LeftCard = styled(StyledCard)({
  transform: 'rotateY(15deg) translateX(-50px)',
  opacity: 0.5,
});

const RightCard = styled(StyledCard)({
  transform: 'rotateY(-15deg) translateX(50px)',
  opacity: 0.5,
});

const ServiceCarousel = () => {
  return (
    <Box sx={{ padding: '20px', bgcolor: 'background.paper' }}>
      {/* <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}
      >
        Our Services
      </Typography> */}

      {/* Carousel with tilted next/prev views */}
      <Carousel
        navButtonsAlwaysVisible={true} // Show navigation buttons
        indicators={false} // Hide dots for cleaner look
        cycleNavigation={true} // Enable infinite scrolling
        autoPlay={true} // Enable autoplay
        interval={3000} // Set the interval between slides (3 seconds)
        animation="slide" // Slide animation for smooth transitions
        swipe={true} // Allow swiping
        infiniteLoop={true} // Enable infinite scrolling
      >
        {services.map((service, index) => {
          const prevIndex = (index - 1 + services.length) % services.length; // Previous card index
          const nextIndex = (index + 1) % services.length; // Next card index

          return (
            <CarouselWrapper key={index}>
              {/* Left card (previous) */}
              <LeftCard>
                <img
                  src={services[prevIndex].image}
                  alt={services[prevIndex].name}
                  style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {services[prevIndex].name}
                  </Typography>
                </CardContent>
              </LeftCard>

              {/* Center card (active) */}
              <CenterCard>
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                    {service.name}
                  </Typography>
                </CardContent>
              </CenterCard>

              {/* Right card (next) */}
              <RightCard>
                <img
                  src={services[nextIndex].image}
                  alt={services[nextIndex].name}
                  style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {services[nextIndex].name}
                  </Typography>
                </CardContent>
              </RightCard>
            </CarouselWrapper>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default ServiceCarousel;
