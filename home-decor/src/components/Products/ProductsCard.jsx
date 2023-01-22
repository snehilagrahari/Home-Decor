import Styles from "./ProductsCard.module.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/Cart/cart.actions";
import { useToast } from "@chakra-ui/react";

const ProductsCard = ({ data }) => {
  //console.log(data);
  const { id, images, title, price, discount } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCardClick = () => {
    navigate(`/products/${id}`);
  };
const toast=useToast()
  const handleAddtoCart = () => {
    dispatch(addItemToCart(data));
    setTimeout(()=>{
      toast({
        title:'Product Added to Cart Succesfully ',
        status: 'success',
        position:'top',
        isClosable: true,
      })
    },1000)
   

  };

  return (
    <div className={Styles.mainCard}>
      <div className={Styles.image} onClick={handleCardClick}>
        <img src={images[0]} alt={title} />
      </div>
      <div className={Styles.title}>{title}</div>
      {discount === 0 ? (
        <div className={Styles.price}>₹ {price}</div>
      ) : (
        <div className={Styles.discountedPrice}>
          <div>₹ {price}</div>
          <div>{discount}%off</div>
        </div>
      )}

      <div className={Styles.cart} onClick={handleAddtoCart}>
        <AiOutlineShoppingCart size={25} />
        Add To Cart
      </div>
    </div>
  );
};

export default ProductsCard;
