import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import { Navbar1 } from "./components/Navbar/Navbar";
import { Login } from "./redux/auth/auth.actions";

import Cartfull from "./components/Cart/Cartfull";

import Search from "./pages/Search";


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    let id = localStorage.getItem("craftsVillaUser") || null;
    if(id)
    {
      dispatch(Login(id));
    }   
  },[])
  return (
    
    <div >
      <Navbar1 />
      <AllRoutes />

    </div>
  );
}

export default App;
