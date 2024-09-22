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

const AppointmentsTable = () => {
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
    <Box sx={{ margin: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Appointments List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="appointments table">
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Mobile Number</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Service(s)</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell align="center">{appointment.first_name}</TableCell>
                <TableCell align="center">{appointment.last_name}</TableCell>
                <TableCell align="center">{appointment.mobile_number}</TableCell>
                <TableCell align="center">
                  {appointment.email || 'N/A'}
                </TableCell>
                <TableCell align="center">
                  {appointment.service.join(', ')}
                </TableCell>
                <TableCell align="center">
                  {new Date(appointment.date).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {appointment.time.slice(0, 5)} {/* Show only HH:MM */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AppointmentsTable;
