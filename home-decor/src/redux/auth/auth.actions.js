import { addUserAPI, authGetApi, getUserAPI } from "./auth.api"
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT } from "./auth.type";


export const checkNumber = async (number)=>{
    let res = await authGetApi();
    for(let i=0;i<res.data.length;i++)
    {
        if(res.data[i].userNumber == number)
        {
            
            return res.data[i].id;
        }
    }
    return false;
}

export const Login = (id)=> async(dispatch) =>{
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

export const Signup = (number)=>async (dispatch)=>{
    let data = {
        userNumber : number
    }
    try{
        let res = await addUserAPI(data);
        let id =await checkNumber(number);
        dispatch(Login(id));

    }
    catch(err){
        console.log(err);
    }
}