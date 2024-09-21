import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import ModalComponent from '../ModalComponent/ModalComponent';

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
  { name: 'Online Beauty Salon Booking', image: 'https://via.placeholder.com/500' },
  { name: 'Massage', image: 'https://via.placeholder.com/500' },
  { name: 'Microblading', image: 'https://via.placeholder.com/500' },
  { name: 'Acne Treatments', image: 'https://via.placeholder.com/500' },
  { name: 'Make-up', image: 'https://via.placeholder.com/500' },
  { name: 'Manicure', image: 'https://via.placeholder.com/500' },
  { name: 'Waxing', image: 'https://via.placeholder.com/500' },
  { name: 'Wedding and Event Preparation', image: 'https://via.placeholder.com/500' },
  { name: 'Shampoo & Conditioning', image: 'https://via.placeholder.com/500' },
  { name: 'Hairstyling', image: 'https://via.placeholder.com/500' },
  { name: 'Bridal Rental Jewelry', image: 'https://via.placeholder.com/500' },
  { name: 'Ear and Nose Piercing', image: 'https://via.placeholder.com/500' },
  { name: 'Saree Box Folding', image: 'https://via.placeholder.com/500' },
  { name: 'Tattoos', image: 'https://via.placeholder.com/500' },
  { name: 'Warts Removal', image: 'https://via.placeholder.com/500' }
];

const ServiceProvided = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <Grid container style={{padding: '10px'}} spacing={2} justifyContent="center">
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Box
            className="service-card"
            onClick={() => openModal(service)}
          >
            <Card
              variant="outlined"
              sx={{
                height: 75,
                display: 'flex',
                background: `linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)`,
                borderRadius: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 20px rgba(106, 27, 154, 0.4)',
                  background: `linear-gradient(135deg, #9C27B0 0%, #6A1B9A 100%)`,
                },
              }}
            >
              <CardContent>
                <Typography 
                  variant="h6" 
                  align="center"
                  sx={{
                    color: 'white',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    fontWeight: 'bold',
                  }}
                >
                  {service.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
      {selectedService && (
        <ModalComponent isOpen={!!selectedService} onClose={closeModal}>
          <img
            src={selectedService.image}
            alt={selectedService.name}
            style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px' }}
          />
        </ModalComponent>
      )}
    </Grid>
  );
};

export default ServiceProvided;