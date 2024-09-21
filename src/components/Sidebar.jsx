import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a purple-violet theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#8E24AA', // Deep purple
    },
    secondary: {
      main: '#9C27B0', // Violet color
    },
  },
});

const Sidebar = ({ open, onClose, navLinks }) => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        variant="persistent" // Ensure the Drawer remains open/fixed
        PaperProps={{
          style: {
            width: '75%',
            backgroundColor: '#F3E5F5', // Light purple background for the sidebar
            position: 'fixed',  // Make sidebar fixed
            top: 0,  // Align it to the top of the page
            left: 0,  // Align to the left of the page
            height: '100vh',  // Take full viewport height
            zIndex: 1200,  // Ensure it stays on top
          },
        }}
      >
        {/* Close button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={onClose} sx={{ color: theme.palette.primary.main }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List>
          {navLinks.map((link) => (
            <ListItem
              button
              component={Link}
              to={link.path}
              key={link.title}
              onClick={onClose}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: '#EDE7F6', // Lighter purple on hover
                  color: theme.palette.primary.main,
                },
                '&.Mui-selected': {
                  backgroundColor: '#D1C4E9', // Light violet background for selected item
                  color: theme.palette.primary.main,
                },
                textDecoration: 'none', // Remove underline
              }}
            >
              <ListItemText
                primary={link.title}
                sx={{
                  fontFamily: 'Poppins', // Set font to Poppins
                  fontWeight: 500, // Use medium font weight
                  fontSize: '1rem', // Font size for items
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default Sidebar;
