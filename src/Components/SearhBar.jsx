import React from 'react';
import styles from "./SearchBar.module.css";



const SearhBar = () => {
    return (
        // https://wallpaperaccess.com/full/3239746.jpg
        <div className={styles.inputMain}>
            <div className={styles.inputTop}>
                Exclusive Tours & Holiday Packages
            </div>
            <div className={styles.inputDiv}>
                <input className={styles.inputBox} type="search" placeholder='Search Packages For Destinations' ></input>
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
