import React, { forwardRef } from 'react'

const DetailsInputPin = forwardRef(({ onSingularInputHandler, onBackSpaceHandler ,otp}, ref) => {

    const handleKeyUP = (e) => {
        if(e.keyCode === 8 && !e.target.value) {
            onBackSpaceHandler(e)
        } else {
            onSingularInputHandler(e);
        }
    }
  return (
    <input 
    ref={ref}
     maxLength={1}
    style={{marginLeft :'1rem', width:'40px', height:'40px', textAlign:'center'}}
    onKeyUp={handleKeyUP}
    />
  )
});

export default DetailsInputPin