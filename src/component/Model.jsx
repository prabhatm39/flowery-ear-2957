import React from 'react'
import { useDisclosure } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { BsPlayFill } from "react-icons/bs";

const Model = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button onClick={onOpen}><BsPlayFill></BsPlayFill></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton style={{ marginLeft:"120px",background:"block" }} />
          <ModalBody>
          <video width="30%"  height='270px' style={{ margin:'auto' }} controls autoPlay={true} muted >
            <source
                src="https://stream.mux.com/XdWcF8Xx02ekQt772XFZgIZXGNlr5BdXO/high.mp4"
                type="video/mp4"
              />
            </video>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Model