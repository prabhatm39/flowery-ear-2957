import React from 'react'
import Styles from '../dubai.module.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import { BsPlayFill } from "react-icons/bs";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'transparent',
    boxShadow: 24,
    p: 4,
  };
const PageI = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <img src="https://img.youtube.com/vi/JFHnH4p4Mn4/sddefault.jpg" alt="" />
        <BsPlayFill className={Styles.playicon} onClick={handleOpen}></BsPlayFill>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/JFHnH4p4Mn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
        </Modal>
    </div>       
  )
}

export default PageI