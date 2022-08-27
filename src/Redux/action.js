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

const getData3 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST3})
    return axios
    .get("https://api-myntra.herokuapp.com/slider2")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS3,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE3 })
    })
}

const getData4 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST4})
    return axios
    .get("https://api-myntra.herokuapp.com/slider4")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS4,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE4 })
    })
}

const getData5 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST5})
    return axios
    .get("https://api-myntra.herokuapp.com/shop")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS5,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE5 })
    })
}

const getData6 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST6})
    return axios
    .get("https://api-myntra.herokuapp.com/slider5")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS6,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE6 })
    })
}

const getData7 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST7})
    return axios
    .get("https://api-myntra.herokuapp.com/slider6")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS7,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE7 })
    })
}

const getData8 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST8})
    return axios
    .get("https://api-myntra.herokuapp.com/slider7")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS8,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE8 })
    })
}

const getData9 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST9})
    return axios
    .get("https://api-myntra.herokuapp.com/slider8")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_DATA_SUCCESS9,
            payload:r.data     
        })
    })
    .catch((e)=>{
        return dispatch({ type: types.GET_DATA_FAILURE9 })
    })
}
export { getData1,
         getData2,
         getData3,
         getData4,
         getData5,
         getData6,
         getData7,
         getData8,
         getData9
       }