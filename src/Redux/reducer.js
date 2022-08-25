import * as types from "./actionType";


const initialState = {
    data: [],
    mind: [],
    domestic: [],
    international: [],
    isLoading: false,
    isError: false,
};
const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
        case types.REQUEST_PACKAGE_DATA:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case types.SUCCESS_PACKAGE_DATA:
            return {
                ...state,
                data: payload,
                isLoading: true,
                isError: false,
            };

        case types.FAILURE_PACKAGE_DATA:
            return {
                ...state,
                data: payload,
                isLoading: true,
                isError: false,
            };

        case types.REQUEST_PACKAGE_DATA_MIND:
            return {
                ...state,
                isLoading: true,
                isError: false
            };

        case types.SUCCESS_PACKAGE_DATA_MIND:
            return {
                ...state,
                mind: payload,
                isLoading: false,
                isError: false,
            };

        case types.FAILURE_PACKAGE_DATA_MIND:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case types.REQUEST_PACKAGE_DATA_DOMESTIC:
            return{
                ...state,
                isLoading: true,
                isError: false,
            };
        
        case types.SUCCESS_PACKAGE_DATA_DOMESTIC:
            return{
                ...state,
                domestic: payload,
                isError: false,
                isLoading: false,
            }
        
        case types.FAILURE_PACKAGE_DATA_DOMESTIC:
            return{
                ...state,
                isLoading: false,
                isError: true,
            }

            case types.REQUEST_PACKAGE_DATA_INTERNATIONAL:
                return{
                    ...state,
                    isLoading: true,
                    isError: false,
                };
            
            case types.SUCCESS_PACKAGE_DATA_INTERNATIONAL:
                return{
                    ...state,
                    international: payload,
                    isError: false,
                    isLoading: false,
                }
            
            case types.FAILURE_PACKAGE_DATA_INTERNATIONAL:
                return{
                    ...state,
                    isLoading: false,
                    isError: true,
                }


        default: {
            return state;
        }
    }
};

export { reducer };