import * as types from './actionType'
const initialState={
    heading:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state = initialState,action)=>{
const {type,payload} = action

switch(type){
    case types.GET_DATA_REQUEST:
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    case types.GET_DATA_SUCCESS:
        return{
            ...state,
            heading:payload,
            isLoading:false,
            isError:false,
        }  
    case types.GET_DATA_FAILURE:
        return{
            ...state,
            isLoading:false,
            isError:true,
        }
     default:
        return state         
}
}