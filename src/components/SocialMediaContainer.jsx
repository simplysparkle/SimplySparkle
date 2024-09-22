import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMediaContainer = ({ direction = 'horizontal' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap: 2, // Spacing between the icons
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <IconButton
        component="a"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <FacebookIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <TwitterIcon />
      </IconButton> */}

      <IconButton
        component="a"
        href="https://www.instagram.com/simplysparklebeautysalon/"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <InstagramIcon />
      </IconButton>

      {/* <IconButton
        component="a"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <LinkedInIcon />
      </IconButton> */}

      <IconButton
        component="a"
        href="https://wa.me/9597587040"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <WhatsAppIcon />
      </IconButton>
    </Box>
  );
};

export default SocialMediaContainer;
