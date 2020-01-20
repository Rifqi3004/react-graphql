import {GET_ORDER_CUSTOMER} from '../../constant/customer'

const initialState = {
    data : [],
    isLoading : false,
    isError : false,
    isFinish : ''
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_CUSTOMER+'_PENDING' : 
        return {
          ...state, isLoading : true
        }
    
        case GET_ORDER_CUSTOMER+'_FULFILLED' : 
        return {
            ...state, isLoading : false, isFinish : true,
            data : action.payload
        }
    
        case GET_ORDER_CUSTOMER+'_REJECTED' : 
        return {
        ...state, isError : true,

        }

      default:
        return state;
    }
  };
