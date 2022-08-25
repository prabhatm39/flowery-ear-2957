import React, { useState } from 'react';
import {
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react';
import './HomePageDetails.css'
import DetailsPageModal from './DetailsPageModal';

const DetailsRigthSide = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cNumber, setCNumber] = useState('');
    const [dDate, setDDate] = useState('');
    const [destination, setDestination] = useState('');
    const [dCity, setDCity] =useState('');
    const [budget, setBudget] = useState('');

    const [form,setForm] = useState([]);

    const handleRequestCallback = (e) => {
      e.preventDefault(e);
      const payload = {
        email,
        name,
        cNumber,
        dDate,
        destination,
        dCity,
        budget
      }
      setForm[payload];
      // console.log(payload);
    }
    console.log(form);
  return (
    <div> 
      <div className="left_siderbar_form">
      <h3>Want to book a similar trip?</h3>
      <FormControl className="form" >
            <Input type="email" 
            placeholder="Email"
            required  
            className="input_fild" 
            onChange={(e) => setEmail(e.target.value)}/>

            <Input type="text" placeholder="Full Name" className="input_fild" required
             onChange={(e) => setName(e.target.value)}/>

            <Input type="text" placeholder="Contact Number" className="input_fild" required 
            onChange={(e) => setCNumber(e.target.value)}/>

            <Input placeholder="Departure Date" type="text" className="input_fild" required
            onChange={(e) => setDDate(e.target.value)} />

            <Input type="text" placeholder="Departure City" className="input_fild" required
            onChange={(e) => setDCity(e.target.value)}/>

            <Input type="text" placeholder="Destination" className="input_fild" required 
            onChange={(e) => setDestination(e.target.value)}/>

            <Input type="text" placeholder="Budget Per Person" className="input_fild" required  
            onChange={(e) => setBudget(e.target.value)}/>

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
                <Button className="RequstCallbakc_button" onClick={handleRequestCallback}>Request Callback</Button>
                <div><DetailsPageModal /></div>         
                <p style={{fontSize:'10px'}}>I accept the Terms of Use and Privacy Policy of Tripoto.</p>
            </div>
      </FormControl>
      </div>
    </div>
  )
}

export default DetailsRigthSide
