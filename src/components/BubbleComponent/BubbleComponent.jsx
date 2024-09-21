import React from 'react';
import { Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const BubbleComponent = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',    
        gap: 1,
        zIndex: 1000,
        padding: 2,
        borderRadius: '35px', // Rounded corners
        // background: 'radial-gradient(#ffffff, #00000000)'
        background: '#1b413c'
    }}
    >
      {/* WhatsApp Button */}
      <IconButton
        sx={{
          backgroundColor: '#25D366',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#128C7E',
          },
        }}
         href="https://wa.me/9597587040"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </IconButton>

      {/* Instagram Button */}
      {/* <IconButton
        sx={{
          backgroundColor: '#E1306C',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#C13584',
          },
        }}
        href="https://instagram.com/YOUR_INSTAGRAM_PROFILE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </IconButton> */}
    </Box>
  );
};

export default BubbleComponent;
