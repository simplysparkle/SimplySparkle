import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Footer from './components/Footer/Footer';
import BubbleComponent from './components/BubbleComponent/BubbleComponent';

function AppLayout() {
  const location = useLocation(); // Correct usage inside Router context
  const isAppointmentPage = location.pathname === '/appointment'; // Determine if we're on the appointment page

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer position={isAppointmentPage ? 'fixed' : 'relative'} />
      <BubbleComponent />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
