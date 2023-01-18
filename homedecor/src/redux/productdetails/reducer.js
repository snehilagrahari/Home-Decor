import { ADD_ITEM_TO_CART_ERROR, ADD_ITEM_TO_CART_LOADING, ADD_ITEM_TO_CART_SUCCESS } from "./actiontype"


const initial={
    addcartitems:{
        loading:false,
        error:false
    },
    data:[]
}



export const Cartitems=(state=initial,{type,payload})=>{
    switch(type){

        case ADD_ITEM_TO_CART_SUCCESS:{
            return {
                ...state,
                data:[...state.data,payload]
            }
        }

        case ADD_ITEM_TO_CART_ERROR:{
            return {
                ...state,
                ...(state.addcartitems.error)==true
            }
        }

        case ADD_ITEM_TO_CART_LOADING :{
            return {
                ...state,
                ...(state.addcartitems.loading)==true
            }
        }

        default: {
            return state
        }
    }
}