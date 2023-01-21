
import axios from 'axios'
import { GET_CART_ITEMS_ERROR } from "./cart.types";
import { GET_CART_ITEMS_LOADING } from "./cart.types";
import { GET_CART_ITEMS_SUCCESS } from "./cart.types";

import { ADD_ITEM_TO_CART_ERROR } from "./cart.types";
import { ADD_ITEM_TO_CART_SUCCESS } from "./cart.types";
import { ADD_ITEM_TO_CART_LOADING } from "./cart.types";

import { UPDATE_CART_ITEMS_ERROR } from "./cart.types";
import { UPDATE_CART_ITEMS_LOADING } from "./cart.types";
import { UPDATE_CART_ITEMS_SUCCESS } from "./cart.types";
import { REMOVE_CART_ITEMS_LOADING } from "./cart.types";
import { REMOVE_CART_ITEMS_ERROR } from "./cart.types";
import { REMOVE_CART_ITEMS_SUCCESS } from "./cart.types";


/*export const getCartItems=()=> (dispatch)=>{

    dispatch({type:GET_CART_ITEMS_LOADING})
return  axios.get("https://mock-server-ge69.onrender.com/api/Orders")
.then((res)=>{
    return dispatch({type:GET_CART_ITEMS_SUCCESS,payload:res.data})
})
.catch(()=>dispatch({type:GET_CART_ITEMS_ERROR}))

}*/

export const  getCartItems=()=>async(dispatch)=>{
    dispatch({type:GET_CART_ITEMS_LOADING})
    try {
        let resp=await axios.get("https://mock-server-ge69.onrender.com/api/CartItem")

        dispatch({type:GET_CART_ITEMS_SUCCESS,payload:resp.data})
        console.log('hello',resp.data)
    } catch (error) {
        dispatch({type:GET_CART_ITEMS_ERROR})
    }
}
















export const addItemToCart=(info)=>(dispatch)=>{

    dispatch({type:ADD_ITEM_TO_CART_LOADING})
return  axios.post("https://mock-server-ge69.onrender.com/api/CartItem",{...info,count:1,fixed:info.price})
.then(({data})=>{
    dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data})
    dispatch(getCartItems());

})

.catch(()=>dispatch({type:ADD_ITEM_TO_CART_ERROR}))

}

export const removeItemFromCart=(cartId)=>(dispatch)=>{

    dispatch({type:REMOVE_CART_ITEMS_LOADING})
return  axios.delete(`https://mock-server-ge69.onrender.com/api/CartItem/${cartId}`)
.then((re)=>{
    dispatch({type:REMOVE_CART_ITEMS_SUCCESS,payload:{id:cartId}})
    dispatch(getCartItems());
})

.catch(()=>dispatch({type:REMOVE_CART_ITEMS_ERROR}))

}


export const updateCartItem=(cartId,update)=>(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEMS_LOADING})
    
    return axios.patch(`https://mock-server-ge69.onrender.com/api/CartItem/${cartId}`,{
       
    
    ...update,
    })
    .then(({data})=>{
        dispatch({type:UPDATE_CART_ITEMS_SUCCESS,payload:data})
        dispatch(getCartItems());
    })
    .catch(()=>dispatch({type:UPDATE_CART_ITEMS_ERROR}))
    }