import { ADD_ITEM_TO_CART_ERROR,ADD_ITEM_TO_CART_SUCCESS ,ADD_ITEM_TO_CART_ERROR} from "./actiontype"



const cAddLoading=()=>({
    type:ADD_ITEM_TO_CART_LOADING
    
})
const cAddSuccess=(payload)=>({
    type:ADD_ITEM_TO_CART_SUCCESS,
    payload
    
})
const cAddError=()=>({
    type:ADD_ITEM_TO_CART_ERROR,
    
})


export const cart=()=>{
    
}