import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#8E24AA', // A deep purple color
        },
        secondary: {
            main: '#9C27B0', // A violet color
        },
    },
});

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Appointment', path: '/appointment' },
    ];

    // Style for the active link
    const activeLinkStyle = {
        color: '#ce93d8', // A soft purple color to highlight the active link
        borderBottom: '2px solid #ce93d8',  // Underline the active link
        textDecoration: 'none'
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="fixed" // Make navbar fixed
                sx={{
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                    height: { xs: '60px', md: '80px' }, // Adjust height for mobile and desktop
                    background: 'linear-gradient(135deg, #9C27B0, #673AB7)',
                }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{
                            display: { xs: 'block', md: 'none' }, // Show only in mobile view
                            fontSize: '2rem',  // Larger size for mobile view
                            mr: 2,
                        }}
                    >
                        <MenuIcon sx={{ fontSize: '2.5rem' }} /> {/* Hamburger icon size */}
                    </IconButton>

                    {/* Center Title */}
                    <Typography
                        variant="h3"
                        sx={{
                            flexGrow: { xs: 1, md: 0 },  // Allow title to grow in mobile view
                            textAlign: { xs: 'center', md: 'left' },  // Center title in mobile, left-align in desktop
                            fontFamily: "Neonderthaw",  // Use custom font for title
                            color: '#ffffff',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',  // Subtle shadow
                            fontSize: { xs: '1.8rem', md: '2.5rem' },  // Responsive font size
                        }}
                    >
                        Simply Sparkle
                    </Typography>

                    {/* Right-aligned Navigation Links */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },  // Show only in desktop view
                            ml: 'auto',  // Push links to the right
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.title}
                                to={link.path}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                            ...activeLinkStyle,
                                            color: '#ffffff',  // Change active color to white for better contrast
                                            borderBottom: '2px solid #ffffff',  // White underline for active link
                                        }
                                        : {
                                            color: 'rgba(255,255,255,0.7)',  // Slightly transparent white for inactive links
                                            textDecoration: 'none',
                                        }
                                }
                                end
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        margin: '0 10px',
                                        padding: '5px 0',
                                        fontFamily: 'Poppins',
                                        fontWeight: '500',  // Slightly bolder text
                                        textTransform: 'uppercase',  // Capitalized text
                                        letterSpacing: '1.5px',  // Add spacing
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: '#ffffff',
                                            borderBottom: '2px solid rgba(255,255,255,0.5)',  // Hover effect
                                        },
                                    }}
                                >
                                    {link.title}
                                </Typography>
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Sidebar open={drawerOpen} onClose={toggleDrawer} navLinks={navLinks} />

            {/* Spacer to ensure content doesn't overlap the fixed navbar */}
            <Box sx={{ height: { xs: '60px', md: '80px' } }} />
        </ThemeProvider>
    );
};

export default Navbar;
