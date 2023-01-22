import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
// import Product from "../pages/Product";
import Search from "../pages/Search";
import OrderPage from '../pages/OrderPage'
import Products from "./Products/Products";
import Productdetails from "./productsdetails/productdetails";
import Login from "./Login/Login";
import Login1 from "./Login/Login1";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Productdetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
