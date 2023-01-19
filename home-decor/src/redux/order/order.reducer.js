import { ORDER_ERROR, ORDER_GET, ORDER_LOADING, ORDER_RESET } from "./order.type"

const initState = {
    loading : false,
    error : false,
    orders : []
}

export const orderReducer = (state=initState,action)=>{
    switch(action.type)
    {
        case ORDER_LOADING : {
            return {...state, loading : true}
        }
        case ORDER_ERROR : {
            return {...state, loading : false, error : true}
        }
        case ORDER_GET : {
            return {...state, loading : false, orders : action.payload}
        }
        case ORDER_RESET : {
            return initState;
        }
        default : return state;
    }
}