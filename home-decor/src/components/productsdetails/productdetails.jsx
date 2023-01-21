import React from "react";
import Sideimage from "./sideimage";
import Cartitems from "./Cartitems";
import Discreption from "./Discreption";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../redux/productdetails/action";
import { useEffect, useState } from "react";
import { Center, Image, Box } from "@chakra-ui/react";
import Loading from "../Products/Loading";

function Productdetails() {
  const [exist, setExist] = useState(false);
  // const [productdata, setproductdata] = useState({});
  const { id } = useParams();

  const [imageID, setImageId] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const cart = useSelector((state) => state.cart.datas);

  useEffect(() => {
    dispatch(products(id));
  }, []);

  useEffect(() => {
    setExist(CheckExistence(cart, data));
  }, [cart]);

  const CheckExistence = (cart, data) => {
    console.log("running");
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i].id);
      if (cart[i].id == data.id) {
        console.log("FOund");
        return true;
      }
    }
    console.log("Not Found");
    return false;
  };
  const loading = useSelector((state) => state.product.loading);

  const handleSideClick = (i) => {
    setImageId(i);
  };

  const handleExistChange = (val) => {
    setExist(val);
  };

  return (
    <Box>
      {loading && loading ? (
        // <h1 style={{ textAlign: "center" }}>Loading....</h1>
        <Center minH="400px">
          <Loading />
        </Center>
      ) : (
        // <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="dummy" style={{margin:"auto"}} />
        <Box
          display="grid"
          gridTemplateColumns={{
            sm: "repeat(1,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
          }}
          style={{
            gap: "2px",
            marginTop: "10px",
          }}
        >
          <Sideimage
            images={data.images}
            current={imageID}
            onClick={handleSideClick}
          />

          <Box
          left={{base:"none" ,sm:"0%" , md:"-73%", lg:"-72%", xl:"-74%"}}
          margin={{base:"20px" ,sm:"10px"}}
          width={{base:"100%" ,sm:"100%"}}
            style={{
              // border: "1px solid red",
              // width: "100%",
              position: "relative",
              // left: "-62%",
            }}
          >
            <Image
              objectFit={"cover"}
              boxSize={"90%"}
              src={data.images && data.images[imageID]}
              alt="Dan Abramov"
            />
          </Box>

          <Cartitems data={data} exist={exist} change={handleExistChange} />
        </Box>
      )}
      <hr />

      <Discreption description={data.description} />
      <Footer />
    </Box>
  );
}

export default Productdetails;
