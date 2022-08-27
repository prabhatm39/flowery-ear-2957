import React from 'react';
import styles from "./FetchData.module.css";
import {Link} from "react-router-dom";

const CompleteData = ({suggestions}) => {
    console.log(suggestions);
    return (
        <div className={styles.fetchMain} >
               
                <div className={styles.fetchTop}>
                    {
                        suggestions.map((item) => {
                            return <div className={styles.fetchTopRe}>
                            <h2 className={styles.heading}>{item.location} Packages</h2>
                            <Link to={`/packages/${item.id}`}>
                                <div>
                                    <img className={styles.fetchImage} src={item.banner} />
                                </div>
                            </Link>
                                <p className={styles.packa}>PACKAGE</p>
                                <h3>{item.descTitle}</h3>
                                <div className={styles.location}>
                                    <div className={styles.locationLeft}>{item.location}</div>
                                    <div className={styles.locationRight}>{item.days}</div>
                                </div>
                                <div className={styles.price}>
                                    <div style={{ display: "flex" }}>
                                        <div><h3>{item.price}</h3></div>
                                        <div><p>/{item.person}</p></div>
                                    </div>
                                    <div className={styles.buttonDiv}>
                                        <button className={styles.buttonMain}>Book Now</button>
                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>
                </div>
    )
}

export default CompleteData
