import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getDomesticData, getInternationalData, getMindData } from '../Redux/action';

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
            <div>
                <h2>Tripoto's Mindful Retreats</h2>
                <div>
                    {
                        mind.map((item) => {
                            return <div>
                                <div>
                                <img src={item.banner} /> 
                                </div>
                                <h3>PACKAGE</h3>
                                <h2>{item.descTitle}</h2>
                                <div>
                                    <div>{item.location}</div>
                                    <div>{item.days}</div>
                                </div>
                                <div>
                                    <div>
                                    <h2>{item.price}</h2>
                                    <p>{item.person}</p>
                                    </div>
                                    <div>
                                    <button>Book Now</button>
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
