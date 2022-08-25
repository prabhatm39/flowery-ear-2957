import * as types from "./actionType"
import axios from 'axios'
const getData1 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST})
    return axios
    .get("https://api-myntra.herokuapp.com/tripoto")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE })
    })
}

const getData2 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST2})
    return axios
    .get("https://api-myntra.herokuapp.com/slide1")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS2,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE2 })
    })
}
export { getData1,getData2 }