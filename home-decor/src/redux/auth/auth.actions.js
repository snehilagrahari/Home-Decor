import { authGetApi, getUserAPI } from "./auth.api"
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT } from "./auth.type";


export const checkNumber = async (number)=>{
    let res = await authGetApi();
    let data = res.data;
    for(let i=0;i<data.length;i++)
    {
        if(data.mobileNumber == number)
        {
            return data.id;
        }
    }
    return false;
}

export const Login =(id)=>async(dispatch)=>{
    dispatch({type : AUTH_LOADING});
    try{
        let res = await getUserAPI(id);
        let data = res.data;
        console.log(res.data);
        dispatch({type:AUTH_LOGIN,payload : data});
        localStorage.setItem("craftsVillaUser",id);
    }
    catch(err){
        dispatch({type : AUTH_ERROR});
    }
}

export const Logout = ()=>(dispatch)=>{
    dispatch({type : AUTH_LOGOUT});
    localStorage.removeItem("craftsVillaUser");
}