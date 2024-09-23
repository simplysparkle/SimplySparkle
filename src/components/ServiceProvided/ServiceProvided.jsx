import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import skincare  from '../../assets/carosuel/1_skin-care.jpg'
import hairstyle  from '../../assets/carosuel/5_hair style.jpg'
import haircolor  from '../../assets/carosuel/haircolor.jpg'
import manipedi  from '../../assets/carosuel/manicure-pedicure.jpeg'
import waxing  from '../../assets/carosuel/threading-waxing.jpg'
import hair  from '../../assets/hair.jpg'
import hairsalon  from '../../assets/HairSalon.jpg'
import warts  from '../../assets/carosuel/warts.jpeg'
import tattos  from '../../assets/carosuel/tattoos.jpg'
import mehandi  from '../../assets/carosuel/mehandi.jpg'
import saree  from '../../assets/carosuel/sarefolding1.jpg'
import bridaljewel  from '../../assets/carosuel/bridal-jewellary.jpg'
import prewedding  from '../../assets/carosuel/preweddings.jpeg'
import piecering  from '../../assets/carosuel/piecering.jpg'
import makeover  from '../../assets/carosuel/bridalmakeover.jpeg'



 
const services = [
  { name: 'Skincare (Hydra facial, Spa facials, De-tan, Masks)', image: `${skincare}` },
  { name: 'Skin & Hair Treatment', image: `${hair}` },
  { name: 'Manicures & Pedicures', image: `${manipedi}` },
  { name: 'Waxing, Threading', image: `${waxing}` },
  { name: 'Hair styling & Hair spa', image: `${haircolor}` },
  { name: 'Haircuts & Hair color', image: `${hairstyle}` },
  // { name: 'Straightening & smoothening', image: 'https://via.placeholder.com/500' },
  // { name: 'Keratin', image: 'https://via.placeholder.com/500' },
  { name: 'Pre Bridal & Groom Packages', image: `${prewedding}` },
  { name: 'Bridal & Groom Makeover ', image: `${makeover}` },
  { name: 'Saree Box Folding (Pre-pleats)', image: `${saree}` },
  { name: 'Mehandi', image: `${mehandi}` },
  { name: 'Bridal rental jewellary', image: `${bridaljewel}` },
  { name: 'Ear & Nose piercing', image:   `${piecering}` },
  { name: 'Tattoos', image: `${tattos}` },
  { name: 'Warts removal', image: `${warts}` },
];
const ServiceCarousel = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={true}
        autoPlay={true}
        interval={3000}
        animation="slide"
      >
        {services.map((service, index) => (
          <Box key={index} sx={{ position: 'relative', textAlign: 'center' }}>
            <img
              src={service.image}
              alt={service.name}
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: 10,
                left: 0,
                right: 0,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '8px',
              }}
            >
              {service.name}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ServiceCarousel;