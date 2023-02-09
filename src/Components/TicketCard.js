import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0.5px solid grey',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function TicketCard({inputId, inputTitle, inputDesc, inputAccC, inputPc}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ minWidth: 275, width: 600, marginLeft: 10, marginTop: 5, marginRight: 10, borderRadius: 5, cursor: 'pointer'}} onClick={handleOpen}> 
        <CardContent>
          <div style= {{display:"flex"}}>
            <div style={{display: "block"}}>
              <Typography variant="h5" component="div">
                {inputTitle}
              </Typography>
              <Typography variant="body2">
                Description: {inputDesc}
              </Typography>
            </div>
            <div style={{color : inputPc < 50 ? "red" : inputPc > 60 ? "green" : "orange", fontFamily : "fantasy", fontSize: "36px",marginTop: "30px",marginLeft: "10px"}}>
              {`${inputPc}%`}
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <Modal 
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
         <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <b>Ticket ID</b>: {inputId}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>Title</b>: {inputTitle}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>Description</b>: {inputDesc}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>Acceptance Criteria</b>: {inputAccC}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <b>Contact</b>: <a href="https://www.google.com" target="_blank" rel="noreferrer">N/A</a>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}