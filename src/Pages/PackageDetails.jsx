import React, { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import { getSinglePackageData } from '../Redux/action';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { Component } from 'react';

import Slider from 'react-slick';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from "./PackageDetails.module.css";
import PackageDetailsBottom from '../Components/PackageDetailsBottom';
import { useNavigate } from 'react-router-dom';

const PackageDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const single = useSelector((state) => state.AppReducer.singleData);
    // console.log(id);
    console.log("single", single);
    // console.log(single.img1);

    useEffect(() => {
        dispatch(getSinglePackageData(id));
    }, []);

    const [state, setState] = useState({
        email: "",
        fullName: "",
        number: "",
        date: ""

    });
    const { email, fullName, number, date } = state;

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const [counter , setCounter] = useState(0);

    const handleSubmit = (e) => {
        navigate("/");
    }

    return (
        <div className={styles.PackageDetailsMain}>
            <div className={styles.PackageDetailsLeft}>
                <div className={styles.PackageDetailsImgDiv} >
                    <img className={styles.PackageDetailsImg} src={single.img1} />
                </div>
                <h2 className={styles.PackageDetailsh2}>{single.descTitle}</h2>
                <div className={styles.number}>
                    <div className={styles.numberLeft}>
                        <div className={styles.numberLeftImgDiv}>
                            <img className={styles.numberLeftImg} src={single.cirImage} />
                        </div>
                        <div>
                            <h4>{single.cirDesc}</h4>
                        </div>
                    </div>
                    <div className={styles.numberRight}>
                        <h2 className={styles.numberRighth2}>{single.number}</h2>
                    </div>
                </div>
                <div className={styles.days}>
                    <div className={styles.daysLeft}>
                        <div className={styles.daysh2}><h3>{single.days}</h3></div>
                    </div>
                    <div className={styles.daysRight}>
                        <h3>{single.price}/</h3>
                        <p>{single.person}</p>
                    </div>
                </div>
                <div className={styles.PackageDetailsLocation}>
                    <h3 className={styles.PackageDetailsLocationh2}>Location</h3>
                    <h3>{single.location}</h3>
                </div>
                <div className={styles.packageHighlights}>
                    <div>
                        <h4>Meals</h4>
                    </div>
                    <div><h4>Daily Breakfast</h4></div>
                    <div><h4>Sightseeing</h4></div>
                    <div><h4>Homestay</h4></div>
                    <div><h4>Safe to Travel</h4></div>
                    <div><h4>Hill Station</h4></div>
                    <div><h4>Nature</h4></div>
                    <div><h4>Wellness</h4></div>
                </div>
                <hr />
                <PackageDetailsBottom />
            </div>
            <div className={styles.PackageDetailsRight}>
                <div>

                    <form  onSubmit={handleSubmit}>
                        <div className={styles.inputDiv}><p>Please share your details to get a custom quote</p></div>

                        <div className={styles.inputDiv}>
                            <input type="email" 
                            placeholder='Email'
                            value={email} onChange={handleChange} />
                        </div>
                        <div className={styles.inputDiv}>
                            <input type="text" placeholder='Full Name' value={fullName} name={fullName} onChange={handleChange} />
                        </div >
                        <div className={styles.inputDiv}>
                            <input type="number" placeholder='Contact Number' name='number' value={number} />
                        </div>
                        <div className={styles.inputDiv} style={{ display:"flex", gap: "60px" }}>
                            <div><h3>Number Of People</h3></div>
                            <div style={{display: "flex" , gap:"20px", fontSize: "17px"}}>
                                <div onClick={() => setCounter(counter+1)}>+</div>
                                <div>{counter}</div>
                                <div onClick={() => setCounter(counter-1)}>-</div>
                            </div>
                        </div>
                        <div className={styles.inputDiv}>
                            <input placeholder='Departure Date' type="date" value={date} name={date} />
                        </div>
                        <div className={styles.inputDiv}>
                        <button className={styles.button}  type="submit">Submit Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PackageDetails
