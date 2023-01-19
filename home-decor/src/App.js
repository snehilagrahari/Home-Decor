
import "./App.css";
import Products from "./components/Products/Products";
import Productdetails from "./components/productsdetails/productdetails";
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Products />
      <Homepage />
      <Productdetails/>
      
    </div>
  );
}

export default App;
