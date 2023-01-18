// import logo from './logo.svg';
// import './App.css';
import { ChakraProvider } from "@chakra-ui/react";

import Productdetails from "./component/productdetails";

function App() {
  return (
    < >
    <ChakraProvider>
      <Productdetails/>

    </ChakraProvider>
    </>
  );
}

export default App;
