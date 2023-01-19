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


const cartInitalState = {
    getCartItems: {
      loading: false,
      error: false,
    },
    addCartItem: {
      loading: false,
      error: false,
    },
    updateCartItem: {
      loading: false,
      error: false,
    },
    removeCartItem: {
      loading: false,
      error: false,
    },
    datas: [],
  };


  //add => cart api => data post (count)=> get data 
  // remove => cart(id).delete=> get p

  //update=>cart(id)=>count+1.patch=>get data












  export const cartReducer = (state = cartInitalState,{type,payload}) => {
  
    switch(type){
    
    case GET_CART_ITEMS_LOADING:{
    
      return{
        ...state,
        loading:true,
        error:false
      }
    }
    
    
    case GET_CART_ITEMS_SUCCESS:{
    
      return{
        ...state,
        datas:payload,
        loading:false,
        error:false
      }
    }
    
    
    
    case GET_CART_ITEMS_ERROR:{
    
      return{
        ...state,
        loading:false,
        error:true
      }
    }
    
    
    
    case UPDATE_CART_ITEMS_ERROR:{
    
      return{
        ...state,
        loading:false,
        error:true
      }
    }
    
    
    
    
    case UPDATE_CART_ITEMS_LOADING:{
    
      return{
        ...state,
        loading:true,
        error:false
      }
    }
    
    
    
    
    
    case UPDATE_CART_ITEMS_SUCCESS:{
    
      return{
        ...state,
        updatedData:payload,
        loading:false,
        error:false
      }
    }
    
    
    
    case REMOVE_CART_ITEMS_ERROR:{
    
      return{
        ...state,
        loading:false,
        error:true
      }
    }
    
    
    
    case REMOVE_CART_ITEMS_LOADING:{
    
      return{
        ...state,
        loading:true,
        error:false
      }
    }
    
    
    case REMOVE_CART_ITEMS_SUCCESS:{
    
      return{
        ...state,
        loading:false,
        error:false
      }
    }
    
    
    default:{
    
      return state
    }
    
    
    
    
    }
    
    
    };



