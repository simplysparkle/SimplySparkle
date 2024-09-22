import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';

// Function to fetch data from the API
const fetchAppointments = async () => {
  try {
    const response = await axios.get(
      'https://vercel-express-backend.vercel.app/api/retrieve-appointment'
    );
    return response.data.appointments;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

const AppointmentDetails = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAppointments();
      setAppointments(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ margin: '20px', fontFamily: 'Montserrat, Poppins, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat, Poppins, sans-serif', fontWeight: 600 }}>
        Appointments List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="appointments table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, Poppins, sans-serif' }}>First Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, Poppins, sans-serif' }}>Last Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, Poppins, sans-serif' }}>Mobile Number</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, Poppins, sans-serif' }}>Email</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, Poppins, sans-serif' }}>Service(s)</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, Poppins, sans-serif' }}>Date</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, Poppins, sans-serif' }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell align="center" sx={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>{appointment.first_name}</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>{appointment.last_name}</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>{appointment.mobile_number}</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>{appointment.email || 'N/A'}</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>{appointment.service.join(', ')}</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>{new Date(appointment.date).toLocaleDateString()}</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>{appointment.time.slice(0, 5)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AppointmentDetails;
