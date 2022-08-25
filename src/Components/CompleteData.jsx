import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getPackageData } from '../Redux/action';

const CompleteData = () => {
    const dispatch = useDispatch();
    const packageData = useSelector((state) => state.AppReducer.data);
    console.log("data:", packageData);

    useEffect(() => {
        dispatch(getPackageData());
    }, []);
    return (
        <div>

        </div>
    )
}

export default CompleteData
