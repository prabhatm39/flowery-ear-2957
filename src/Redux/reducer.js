import * as types from './actionType'
const initialState={
    heading:[],
    data2:[],
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
        case types.GET_DATA_REQUEST2:
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    case types.GET_DATA_SUCCESS2:
        return{
            ...state,
            data2:payload,
            isLoading:false,
            isError:false,
        }  
    case types.GET_DATA_FAILURE2:
        return{
            ...state,
            isLoading:false,
            isError:true,
        } 
     default:
        return state         
}
}