import React from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Material UI heart icon


const Footer = ({ position = 'relative' }) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        padding: '10px 0',
        position: position,
        bottom: position === 'fixed' ? 0 : 'auto',
        left: 0,
        marginTop:'20px',
        right: 0,
        zIndex: 1000,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} SimplySparkle Beauty Salon. All rights reserved.   Crafted with <FavoriteIcon sx={{ color: 'red', fontSize:'12px' }} /> by Happy Scarlet
      </Typography> 
    </Box>
  );
};

export default Footer;
