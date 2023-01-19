import { deleteOrderApi, getOrdersApi, placeOrderApi, updateOrderApi } from "./order.api"
import { ORDER_ERROR, ORDER_GET, ORDER_LOADING } from "./order.type"

export const getOrders = (userId)=>async(dispatch)=>{
    dispatch({type : ORDER_LOADING})
    try{
        let res = await getOrdersApi(userId);
        dispatch({type:ORDER_GET,payload:res.data});
    }
    catch{
        dispatch({type: ORDER_ERROR});
    }
}   

export const placeOrder = (data,userId)=>(dispatch)=>{
    placeOrderApi(data).then(res=>{
        dispatch(getOrders(userId));
    }).catch(err=>{
        console.log(err);
    })

}

export const removeOrder = (id,userId)=>(dispatch)=>{
    deleteOrderApi(id).then(res=>{
        dispatch(getOrders(userId));
    }).catch(err=>{
        console.log(err);
    })
}

export const updateOrder = (id,status,userId) => async(dispatch)=>{
    updateOrderApi(id,status).then(res=>{
        dispatch(getOrders(userId));
    }).catch(err=>{
        console.log(err);
    })
}