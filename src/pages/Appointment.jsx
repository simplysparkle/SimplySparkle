import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { format } from 'date-fns'; // Importing date-fns to format date and time
import backgroundImage from '../assets/appointment-img.jpg';
import AppointmentDetails from '../components/AppointmentDetails';

// Mock services data
const services = ['Haircut', 'Manicure', 'Pedicure', 'Facial', 'Hair Coloring', 'Massage', 'Nail Art'];

// Fetch API URL from environment variables, with fallback for development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const Appointment = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    date: '',
    time: '',
    service: [],
  });

  const [openDialog, setOpenDialog] = useState(false);  // Success modal dialog
  const [serviceError, setServiceError] = useState(false); // Validation for service selection
  const [errorMessage, setErrorMessage] = useState('');  // Error messages

  // Handle changes to form input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle changes in service selection
  const handleServiceChange = (event, newValue) => {
    setFormData({
      ...formData,
      service: newValue,
    });
    if (newValue.length > 0) {
      setServiceError(false);  // Reset error if service is selected
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');  // Clear previous error messages

    // Ensure at least one service is selected
    if (formData.service.length === 0) {
      setServiceError(true);
      return;
    }

    // Format the date and time using date-fns
    const formattedDate = format(new Date(formData.date), 'yyyy-MM-dd'); // Format date to 'YYYY-MM-DD'
    const formattedTime = format(new Date(`1970-01-01T${formData.time}:00`), 'HH:mm'); // Format time to 'HH:mm'

    // Data to send to the backend (ensure `date` is a string)
    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      date: formattedDate, // Send formatted date
      time: formattedTime, // Send formatted time
      services: formData.service,
    };

    console.log('Data to send:', dataToSend); // Check that the data is formatted correctly

    try {
      // API call to save the appointment
      const response = await axios.post(
        `${API_BASE_URL}/save-appointment`,
        dataToSend, // No need to stringify the payload manually, axios does it
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        // Show success modal on successful response
        setOpenDialog(true);

        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          date: '',
          time: '',
          service: [],
        });
      } else {
        // Handle unexpected status codes
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error during API call:', error);

      // Handle various types of errors from the API or network
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Failed to book the appointment. Please try again.');
      } else if (error.request) {
        setErrorMessage('No response from the server. Please try again later.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  // Close the success modal
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)', // Reduce the brightness of the image
          zIndex: -1, // Ensure the background is behind the content
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Form background
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 1, // Ensure the form is above the background
          marginBottom: 4,
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
            {/* Input fields for appointment form */}
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
              {/* Multi-select for services */}
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
            {/* Display error message if present */}
            {errorMessage && (
              <Grid item xs={12}>
                <Typography color="error" variant="body2" align="center">
                  {errorMessage}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  height: '56px',
                  background: 'linear-gradient(45deg, #6A1B9A 30%, #9C27B0 90%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #9C27B0 30%, #6A1B9A 90%)',
                  },
                }}
              >
                Book
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Success modal */}
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
          <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'green', animation: 'pop-in 0.5s ease' }} />
          <Typography variant="h6" sx={{ mt: 2, fontFamily: 'Poppins', fontWeight: 'bold' }}>
            Appointment booked successfully!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontFamily: 'Poppins' }}>
            Our representative will call you to confirm the appointment. If you don't hear from us within an hour, please feel free to reach out via WhatsApp or phone call.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ mx: 'auto', fontFamily: 'Poppins' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* Animation styles for success icon */}
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
