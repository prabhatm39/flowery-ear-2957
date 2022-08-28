import React, { useState , useEffect } from 'react';
import styles from "./SearchBar.module.css";



const SearhBar = ({onChangeInput}) => {
    const [inputText , setInputText] = useState("");
    
    const handleChange = (e) => {
        // console.log(e);
        setInputText(e.target.value);
    };

    useEffect(() => {
        onChangeInput(inputText);
    }, [inputText, onChangeInput])
    // console.log(search);
    return (
        <div  className={styles.inputMain}>
            <div className={styles.inputTop} >
                Exclusive Tours & Holiday Packages
            </div>
            <div className={styles.inputDiv}>
                <input className={styles.inputBox} type="search" placeholder='Search Packages For Destinations' 
                name='search' value={inputText} onChange={handleChange}
                ></input>
            </div>
            <div className={styles.inputBelow}>
                <div>Stays Activities</div>
                <div>Destination </div>
                <div>Rajasthan</div>
                <div>Manali</div>
                <div>Himachal</div>
                <div>Rishikesh</div>
                <div>Uttarakhand</div>
            </div>
        </div>
    )
}

export default SearhBar;