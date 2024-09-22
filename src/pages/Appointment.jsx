import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, Autocomplete, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import backgroundImage from '../assets/appointment-img.jpg'; // Ensure the path is correct

const services = ['Haircut', 'Manicure', 'Pedicure', 'Facial', 'Hair Coloring', 'Massage', 'Nail Art'];

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    date: '',
    time: '',
    service: [],
  });
  const [openDialog, setOpenDialog] = useState(false); // To show success modal
  const [serviceError, setServiceError] = useState(false); // Track if the service selection is missing

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (event, newValue) => {
    setFormData({
      ...formData,
      service: newValue,
    });
    if (newValue.length > 0) {
      setServiceError(false); // Reset error if a service is selected
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation: Check if at least one service is selected
    if (formData.service.length === 0) {
      setServiceError(true);
      return;
    }

    console.log(formData);
    // Show the success modal
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        // filter: 'brightness(0.7)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
          boxShadow: 3,
          marginBottom: 4, // Adding margin at the bottom to avoid button cut-off
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ color: 'black', fontFamily: 'Poppins' }}>
          Book an Appointment
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="mobileNumber"
                label="Mobile Number"
                variant="outlined"
                value={formData.mobileNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email (Optional)"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="date"
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="time"
                label="Time"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.time}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              {/* Multi-select with search for services */}
              <Autocomplete
                multiple
                options={services}
                value={formData.service}
                onChange={handleServiceChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Services"
                    variant="outlined"
                    fullWidth
                    error={serviceError}
                    helperText={serviceError ? 'Please select at least one service' : ''}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  height: '56px', // Increased height
                  background: 'linear-gradient(45deg, #6A1B9A 30%, #9C27B0 90%)', // Violet-Purple Gradient
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #9C27B0 30%, #6A1B9A 90%)', // Hover state
                  },
                }}
              >
                Book
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Success Modal */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center', padding: '24px' }}>
          {/* Success Tick Animation */}
          <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'green', animation: 'pop-in 0.5s ease' }} />
          <Typography variant="h6" sx={{ mt: 2, fontFamily: 'Poppins', fontWeight: 'bold' }}>
            Appointment booked successfully!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2,  fontFamily: 'Poppins' }}>
            Our representative will call you to confirm the appointment. If you don't hear from us within an hour, please feel free to reach out via WhatsApp or phone call.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ mx: 'auto', fontFamily: 'Poppins' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* CSS for Success Animation */}
      <style>
        {`
          @keyframes pop-in {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Appointment;
