import React from "react";
import Sideimage from "./sideimage";
import Cartitems from "./Cartitems";
import Discreption from "./Discreption";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../redux/productdetails/action";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

function Productdetails() {
  // const [productdata, setproductdata] = useState({});
  const { id } = useParams();

  const [imageID, setImageId] = useState(0)
  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    dispatch(products(id));
  }, []);


  const data = useSelector((state) => state.product.data);
 

  const handleSideClick = (i)=>{
    setImageId(i);
  }
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "2px",
          marginTop:"10px"
        }}
      >
       

        <Sideimage images={data.images} current={imageID} onClick={handleSideClick}/>
        
        <div
        style={{
          // border: "1px solid red",
          width: "100%",
          position: "relative",
          left: "-62%",
        }}
      >
        <Image objectFit={'cover'} boxSize={'90%'}  src={data.images && data.images[imageID]} alt="Dan Abramov" />
        </div>
        
        <Cartitems data={data} />
      </div>
      <hr />

      <Discreption description={data.description}/>
      <Footer />
    </div>
  );
      
}

export default Productdetails;
