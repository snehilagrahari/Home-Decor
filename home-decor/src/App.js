import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./components/AllRoutes";
import { Navbar1 } from "./components/Navbar/Navbar";
import { Login } from "./redux/auth/auth.actions";
import { Button } from "@chakra-ui/react";



function App() {
  const dispatch = useDispatch();
const [otp,setOtp]=useState("")




useEffect(() => {
    let id = localStorage.getItem("craftsVillaUser") || null;
    if (id) {
      dispatch(Login(id));
    }
  }, []);

 


















 






  return (
    <div>
     <Navbar1 />
      <AllRoutes />

 {/* <Button id='sign-in-button' onClick={()=>onSignInSubmit()}> Test</Button>
  <input type={'number'}  onChange={(e)=>setOtp(e.target.value)}/>
<Button onClick={()=>varif()}>Varify otp</Button>*/}
    </div>
  );

}
export default App;
