import React, { useEffect } from "react";
import Sideimage from "./sideimage";
import Bigimage from "./Bigimage";
import Cartitems from "./Cartitems";
import Discreption from "./Discreption";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../redux/productdetails/action";

function Productdetails() {
  // const [productdata, setproductdata] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  console.log(data);
  const { id } = useParams();
  console.log(id);
  
  useEffect(()=>{
    dispatch(products(id));
  })
 

  // const getidata = (id = 5) => {
  //   return axios
  //     .get(`https://mock-server-ge69.onrender.com/api/Products/${id}`)
  //     .then((res) => res.data);
  // setproductdata(response);
  // try {
  //   let response = await fetch(
  //     `https://mock-server-ge69.onrender.com/api/Products/`
  //   );
  //   let data = await response.json();
  //   setproductdata(data);
  // } catch (error) {
  //   console.log(error);
  // };

  //products page=> data (useState) x redux(prodcuts)  };

  // useEffect(() => {
  //   getidata().then((res) => {
  //     setproductdata(res);
  //   });
  // }, []);

  // console.log(productdata);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "2px",
        }}
      >
        <Sideimage images={data.images} />
        <Bigimage images={data.images} />
        {/* {productdata && productdata.map((el) => <Cartitems key={el.id} />)} */}
        <Cartitems data={data} />
      </div>
      <hr />

      <Discreption />
      <Footer />
    </div>
  );
}

export default Productdetails;
