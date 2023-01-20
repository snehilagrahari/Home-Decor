import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT } from "./auth.type"


const initial_state = {
    loading : false,
    error : false,
    isAuth : false,
    data : {}
}

export const authReducer = (state=initial_state, action)=>{
    switch(action.type)
    {
        case AUTH_LOADING : {
            return {...state, loading : true};
        }
        case AUTH_ERROR : {
            return {...state, loading: false, error : true};
        }
        case AUTH_LOGIN : {
            return {...state, loading : false, data : action.payload, isAuth : true};
        }
        case AUTH_LOGOUT : {
            return {...state, isAuth:false};
        }
        default : return state
    }
}