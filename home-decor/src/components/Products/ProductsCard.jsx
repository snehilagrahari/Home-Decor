import Styles from "./ProductsCard.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/Cart/cart.actions";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const ProductsCard = ({ data, handleToast, cart }) => {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    CheckExistence(cart, id);
  }, [cart]);


  const { id, images, title, price, discount } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCardClick = () => {
    navigate(`/products/${id}`);
  };
const toast=useToast()
  const handleAddtoCart = () => {
    dispatch(addItemToCart(data));
    handleToast("success");
  };

  const CheckExistence = (cart, value) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == value) {
        setExist(true);
      }
    }

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
      {exist ? (
        <div
          className={Styles.cartAdded}
          onClick={() => handleToast("warning")}
        >
          <AiOutlineShoppingCart size={25} />
          Added To Cart
        </div>
      ) : (
        <div className={Styles.cart} onClick={handleAddtoCart}>
          <AiOutlineShoppingCart size={25} />
          Add To Cart
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
