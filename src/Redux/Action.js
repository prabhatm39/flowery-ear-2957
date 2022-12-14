import * as types from "./actionType";
import axios from "axios";

const getPackageData = () => (dispatch) => {
     dispatch({type : types.REQUEST_PACKAGE_DATA});
     return axios
    .get("http://localhost:8080/user")  
    .then((r) => {
        // console.log(r.data);
        dispatch({type : types.SUCCESS_PACKAGE_DATA, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.FAILURE_PACKAGE_DATA});
    })
};

const getMindData = () => (dispatch) => {
    dispatch({type: types.REQUEST_PACKAGE_DATA_MIND});
    return axios
    .get("http://localhost:8080/mindful")
    .then((r) => {
        dispatch({type: types.SUCCESS_PACKAGE_DATA_MIND, payload:r.data});
    })
    .catch((e) => {
        dispatch({type: types.FAILURE_PACKAGE_DATA_MIND});
    });
};

const getDomesticData = () => (dispatch) => {
    dispatch({type: types.REQUEST_PACKAGE_DATA_DOMESTIC});
    return axios
    .get("http://localhost:8080/domestic")
    .then((r) => {
        dispatch({type: types.SUCCESS_PACKAGE_DATA_DOMESTIC, payload:r.data});
    })
    .catch((e) => {
        dispatch({type: types.FAILURE_PACKAGE_DATA_DOMESTIC})
    });
};

const getInternationalData = () => (dispatch) => {
    dispatch({type: types.REQUEST_PACKAGE_DATA_INTERNATIONAL});
    return axios
    .get("http://localhost:8080/international")
    .then((r) => {
        dispatch({type: types.SUCCESS_PACKAGE_DATA_INTERNATIONAL, payload:r.data})
    })
    .catch((e) => {
        dispatch({type: types.FAILURE_PACKAGE_DATA_INTERNATIONAL});
    });
}

const getSinglePackageData = (id) => (dispatch) => {
    dispatch({type: types.GET_SINGLE_PACKAGE_DATA});
    return axios
    .get(`${"http://localhost:8080/user"}/${id}`)
    .then((r) => {
        dispatch({type: types.SUCCESS_SINGLE_PACKAGE_DATA, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.ERROR_SINGLE_PACKAGE_DATA});
    })
}


const getData1 = ()=>(dispatch)=>{
    dispatch({ type: types.GET_DATA_REQUEST})
    return axios
    .get("https://bookapi-b62i.onrender.com/tripoto")
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
    .get("https://bookapi-b62i.onrender.com/slide1")
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
    .get("https://bookapi-b62i.onrender.com/slider2")
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
    .get("https://bookapi-b62i.onrender.com/slider4")
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
    .get("https://bookapi-b62i.onrender.com/shop")
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
    .get("https://bookapi-b62i.onrender.com/slider5")
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
    .get("https://bookapi-b62i.onrender.com/slider6")
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
    .get("https://bookapi-b62i.onrender.com/slider7")
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
    .get("https://bookapi-b62i.onrender.com/slider8")
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


export {getPackageData , getMindData , getDomesticData, getInternationalData , getSinglePackageData,
    getData1,
    getData2,
    getData3,
    getData4,
    getData5,
    getData6,
    getData7,
    getData8,
    getData9};