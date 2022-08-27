import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSinglePackageData } from '../Redux/action';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from "./PackageDetails.module.css";
import { GridItem } from '@chakra-ui/react';
import PackageDetailsBottom from '../Components/PackageDetailsBottom';

const PackageDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const single = useSelector((state) => state.AppReducer.singleData);
    // console.log(id);
    console.log("single", single);
    // console.log(single.img1);

    useEffect(() => {
        dispatch(getSinglePackageData(id));
    }, []);

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
                <hr/>
                <PackageDetailsBottom />
            </div>
            <div className={styles.PackageDetailsRight}>
            </div>
        </div>
    )
}

export default PackageDetails
