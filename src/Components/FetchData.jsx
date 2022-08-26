import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getDomesticData, getInternationalData, getMindData } from '../Redux/action';
import styles from "./FetchData.module.css";

const FetchData = () => {
    const dispatch = useDispatch();
    let mind = useSelector((state) => state.AppReducer.mind);
    let domestic = useSelector((state) => state.AppReducer.domestic);
    let international = useSelector((state) => state.AppReducer.international);

    // console.log("mind:", mind);
    // console.log("domes:", domestic);
    // console.log("inter:", international);

    useEffect(() => {
        dispatch(getMindData());
        dispatch(getDomesticData());
        dispatch(getInternationalData());
    }, []);
    return (
        <div>
            <div className={styles.fetchMain} >
                <h2>Tripoto's Mindful Retreats</h2>
                <div className={styles.fetchTop}>
                    {
                        mind.map((item) => {
                            return <div className={styles.fetchTopRe}>
                                <div>
                                    <img className={styles.fetchImage} src={item.banner} />
                                </div>
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

                <h2>Trending Domestic Packages</h2>
                <div className={styles.fetchTop}>
                    {
                        domestic.map((item) => {
                            return <div className={styles.fetchTopRe}>
                                <div>
                                    <img className={styles.fetchImage} src={item.banner} />
                                </div>
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

                <h2>Trending International Packages</h2>
                <div className={styles.fetchTop}>
                    {
                        international.map((item) => {
                            return <div className={styles.fetchTopRe}>
                                <div>
                                    <img className={styles.fetchImage} src={item.banner} />
                                </div>
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




        </div>
    )
}

export default FetchData
