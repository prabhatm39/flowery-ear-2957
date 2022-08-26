import * as types from './actionType'
const initialState={
    heading:[],
    data2:[],
    data3:[],
    data4:[],
    data5:[],
    data6:[],
    data7:[],
    data8:[],
    data9:[],
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

            // 2 data part in reducer
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

            // part of data 3 in the reducer
        case types.GET_DATA_REQUEST3:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case types.GET_DATA_SUCCESS3:
            return{
                ...state,
                data3:payload,
                isLoading:false,
                isError:false,
            }  
        case types.GET_DATA_FAILURE3:
            return{
                ...state,
                isLoading:false,
                isError:true,
            } 

        //part 4 with new data for slider in reducer 
        case types.GET_DATA_REQUEST4:
            return{
                 ...state,
                 isLoading:true,
                 isError:false,
            }
        case types.GET_DATA_SUCCESS4:
            return{
                 ...state,
                 data4:payload,
                 isLoading:false,
                 isError:false,
            }  
        case types.GET_DATA_FAILURE4:
            return{
                ...state,
                isLoading:false,
                isError:true,
            } 
        //part 5 with new data of img in reducer 
        case types.GET_DATA_REQUEST5:
            return{
                 ...state,
                 isLoading:true,
                 isError:false,
            }
        case types.GET_DATA_SUCCESS5:
            return{
                 ...state,
                 data5:payload,
                 isLoading:false,
                 isError:false,
            }  
        case types.GET_DATA_FAILURE5:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }   

       //part 6 with new data of slider in reducer 
       case types.GET_DATA_REQUEST6:
        return{
             ...state,
             isLoading:true,
             isError:false,
        }
        case types.GET_DATA_SUCCESS6:
            return{
                ...state,
                data6:payload,
                isLoading:false,
                isError:false,
            }  
        case types.GET_DATA_FAILURE6:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }               
        // part 7 with new data for slider in reducer
        case types.GET_DATA_REQUEST7:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case types.GET_DATA_SUCCESS7:
            return{
                ...state,
                data7:payload,
                isLoading:false,
                isError:false,
            }  
        case types.GET_DATA_FAILURE7:
            return{
                ...state,
                isLoading:false,
                isError:true,
            } 
        // part 8 data of slider in reducer
        case types.GET_DATA_REQUEST8:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case types.GET_DATA_SUCCESS8:
            return{
                ...state,
                data8:payload,
                isLoading:false,
                isError:false,
            }  
        case types.GET_DATA_FAILURE8:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }         
            
        // last part of the page with data of slider in reducer
        case types.GET_DATA_REQUEST9:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case types.GET_DATA_SUCCESS9:
            return{
                ...state,
                data9:payload,
                isLoading:false,
                isError:false,
            }  
        case types.GET_DATA_FAILURE9:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }         
     default:
        return state         
}
}