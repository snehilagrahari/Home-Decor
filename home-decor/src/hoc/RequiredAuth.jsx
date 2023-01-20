import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"


const RequiredAuth = ({ children }) => {
  const isAuth = useSelector((store) => store.auth.data.isAuthenticated);
  const navigate = useNavigate()
  if(isAuth){
    return children
  }else{
    navigate("/login")
  } 
};

export default RequiredAuth;
