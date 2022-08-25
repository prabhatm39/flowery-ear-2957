import React,{useEffect} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getDomesticData, getInternationalData, getMindData } from '../Redux/action';

const FetchData = () => {
    const dispatch = useDispatch();
    let mind = useSelector((state) => state.AppReducer.mind);
    let domestic = useSelector((state) => state.AppReducer.domestic);
    let international = useSelector((state) => state.AppReducer.international);

    console.log("mind:", mind);
    console.log("domes:", domestic);
    console.log("inter:", international);

    useEffect(() => {
        dispatch(getMindData());
        dispatch(getDomesticData());
        dispatch(getInternationalData());
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default FetchData
