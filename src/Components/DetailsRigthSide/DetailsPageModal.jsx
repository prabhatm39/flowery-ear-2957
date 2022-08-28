import React from 'react'
import '../Decs/HomePageDetails.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import DetailsPin from './Pincustom/DetailsPin';
import { ModalHeader,ModalContent,ModalBody,ModalCloseButton } from '@chakra-ui/react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

function DetailsPageModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button onClick={handleOpen} colorScheme=""  className="RequstCallbakc_button"> Requst Callback </button>

      <Modal  open={open}  onClose={handleClose} style={{width:'100%',}} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style}>
           <h1>Verify your phone number</h1>
           <div style={{borderBottom:'1px solid black',width:'90%',margin:'auto'}}></div>
           <p>We've sent you an OTP code to verify your phone number and prove you're a human</p>
                <DetailsPin />
          </Box>
      </Modal>
      
    </>
  )
}
export default DetailsPageModal;