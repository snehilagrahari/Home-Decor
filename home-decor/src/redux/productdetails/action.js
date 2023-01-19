import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./actiontype"

import  {productapicall } from "./productapi"
// Product actions here
const pLoading=()=>({
    type:GET_PRODUCTS_LOADING
    
})
const pSuceess=(payload)=>({
    type:GET_PRODUCTS_SUCCESS,
    payload
    
})
const pError=()=>({
    type:GET_PRODUCTS_ERROR,
    
    
})


export const products=(id)=>async (dispatch)=>{
    dispatch(pLoading())

    try{
       let res = await productapicall(id);
       console.log("HINDI",res)
            dispatch(pSuceess(res.data));

    }
    catch(error){
        dispatch(pError())
    }
        

}    



//     return axios.get("http://localhost:8080/products")
//     .then((res)=>{
//    return   dispatch(pSuceess(res.data))
     
//     })
    // .catch((error)=>{
    //  dispatch(pError())
    // })

// disaptch(getProduct(id))    getproduct= (id)=>(disaptch)
//getProduct(id) params getProductAPI() redux useEffect 

// actions getProduct
// api getProductApi
// Produc_get
//product_loading product_error


