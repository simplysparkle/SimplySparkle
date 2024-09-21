import React from 'react';
import Modal from 'react-modal';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Make sure that your modal root element is set properly
Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          border: 'none',
          background: 'transparent',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={onClose}
        >
          <CloseIcon sx={{ color: '#fff' }} />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
