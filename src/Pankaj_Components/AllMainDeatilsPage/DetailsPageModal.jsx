import React from 'react'
import './HomePageDetails.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import DetailsPin from '../CustomPin/DetailsPin';

function DetailsPageModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme=""  className="RequstCallbakc_button"> Requst Callback </Button>

      <Modal isOpen={isOpen} onClose={onClose} style={{width:'700px'}}>
        <ModalOverlay />
        <ModalContent className="modalContent">
          <ModalHeader>Verify your phone number </ModalHeader>
          <div style={{borderBottom:'1px solid black',width:'90%',margin:'auto'}}></div>
          <ModalCloseButton />
          <ModalBody style={{textAlign:'center'}}>
          <p>We've sent you an OTP code to verify your phone number and prove you're a human</p>
            <DetailsPin />
          </ModalBody>
        </ModalContent>
      </Modal>
      
    </>
  )
}
export default DetailsPageModal;