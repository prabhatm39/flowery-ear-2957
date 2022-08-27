import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@chakra-ui/react"
import {IoClose} from 'react-icons/io5'
import { BsPlayFill } from "react-icons/bs";
const Btn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
{/*  onClick={onOpen} */}
<BsPlayFill onClick={onOpen}/>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay>
    <ModalContent style={{ width:"50%",margin:"auto",marginTop:"-700px" }}>
    {/* <ModalCloseButton  /> */}
    <IoClose onClick={onClose}/>
      <ModalBody>
      <video width='100%' height='300px' controls muted >
        <source
            src="https://stream.mux.com/XdWcF8Xx02ekQt772XFZgIZXGNlr5BdXO/high.mp4"
            type="video/mp4"
          />  
       </video>
      </ModalBody>
    </ModalContent>
  </ModalOverlay>
</Modal>
<div>
</div>
    </div>
  )
}

export default Btn