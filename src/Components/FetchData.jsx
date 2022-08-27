import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getDomesticData, getInternationalData, getMindData } from '../Redux/action';
import styles from "./FetchData.module.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", border: "soild red" }}
            onClick={onClick}
        />
    );
}


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

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className={styles.fetchMain} >

                <h2>Tripoto's Mindful Retreats</h2>
                <Slider {...settings}>
                    {
                        mind.map((item) => {
                            return (
                                <div className={styles.fetchTopRe}>

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
                            )
                        })
                    }
                </Slider>

                <h2>Trending Domestic Packages</h2>
                <Slider {...settings}>
                    {
                        domestic.map((item) => {
                            return (
                                <div className={styles.fetchTopRe}>

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
                            )
                        })
                    }
                </Slider>

                <h2>Trending International Packages</h2>
                <Slider {...settings}>
                   {
                    international.map((item) => {
                        return(
                            <div className={styles.fetchTopRe}>

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
                        )
                    })
                   }
                </Slider>
            </div>
        </div>

    )
}

export default FetchData
