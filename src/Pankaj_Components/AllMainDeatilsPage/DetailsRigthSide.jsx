import React from 'react';
import {
    FormControl,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box, 
    useDisclosure
  } from '@chakra-ui/react';
import './HomePageDetails.css'
import DetailsPageModal from './DetailsPageModal';

const DetailsRigthSide = () => {
    // const navigate= useNavigate()
    const handleModal = () => {
        <DetailsPageModal />
    }
  return (
    <div>
      
      <div className="left_siderbar_form">
      <h3>Want to book a similar trip?</h3>
      <FormControl className="form">
            <Input type="email" placeholder="Email" required  className="input_fild" />
            <Input type="text" placeholder="Full Name" className="input_fild" required/>
            <Input type="text" placeholder="Contact Number" className="input_fild" required/>
            <Input placeholder="Departure Date" type="text" className="input_fild" required />
            <Input type="text" placeholder="Departure City" className="input_fild" required/>
            <Input type="text" placeholder="Destination" className="input_fild" required/>
            <Input type="text" placeholder="Budget Per Person" className="input_fild" required/>

            <div className="Fligth_book_radio">
                <h4 style={{textAlign:'left'}}>Flights Booked?</h4>

                <div className="radio_class">
                  <input type="radio" /> <label>Yes </label>
                </div>
               <div className="radio_class">
                <input type="radio"/> <label> No </label>
               </div>
               
            </div>

            <div className="RequstCallbakc_button">
                <Button className="RequstCallbakc_button" onClick={handleModal}>Request Callback</Button>
                {/* <DetailsPageModal />           */}
                <p style={{fontSize:'10px'}}>I accept the Terms of Use and Privacy Policy of Tripoto.</p>
            </div>
      </FormControl>
      </div>
    </div>
  )
}

export default DetailsRigthSide
