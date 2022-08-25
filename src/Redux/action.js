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

export {getPackageData , getMindData , getDomesticData, getInternationalData };