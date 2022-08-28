import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsInputPin from './DetailsInputPin';
import { useNavigate } from 'react-router-dom';

const DetailsPin = () => {
    const [otp, setOtp]= useState("");
    const length =4;
    const [inputBoxLength] = useState( new Array(length).fill(3));
    const inputRef = useRef([]);
    const [inputData] = useState(new Array(length).fill(""));
    const navigate = useNavigate();
    
    const HandleChange = (e, index) =>{
        inputData[index] = e.target.value
        if( index < length-1) {
            inputRef.current[index+1].focus();
        }
        inputData[index] = e.target.value
        // console.log(inputData);
        setOtp(inputData.join(""));

        if(inputData.join("") === "1234") {
            console.log("Hy");
            //here we can give navigate 
          navigate("/")
        }
    }

    const handleBackSpace = (e,index) => {
        if(index > 0) {
            inputRef.current[index-1].focus()
        }
        inputData[index] = e.target.value
        setOtp(inputData.join(""))
    }

    const handleOnPaste = (e) => {
        const data = e.clipboardData.getData("text").split("").filter((_,index) => index < length)
        data.forEach((item, index) => {
            inputData[index] = item;
            inputRef.current[index].value = item

            if( index < length -1) {
                inputRef.current[index+1].focus();
            }
        })
    }
    useState(() => {
        console.log(inputData);
        console.log(otp);
        if(otp === 1234) {
            console.log("Successful");
        }
    })
  return (
    <div style={{margin:'1rem'}} onPaste={handleOnPaste}>
        {
            inputBoxLength.map((_, index) => {
                return (
                    <>
                    
                    <DetailsInputPin
                    key={index}
                    ref= {(elm) => {
                        inputRef.current[index] = elm
                    }}
                    onSingularInputHandler={(e) => HandleChange(e,index)}
                    onBackSpaceHandler = { (e) => handleBackSpace(e,index)}
                    otp={otp}
                     />
                    
                    </>
                )
            })
        }
    </div>
  )
}

export default DetailsPin

DetailsPin.proTotype = {
    length : PropTypes.number.isRequired,
    setOtp : PropTypes.func,
}