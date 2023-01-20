import Styles from "./ProductsCard.module.css";

import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductsCard = ({ images, title, price, discount }) => {
  return (
    <div className={Styles.mainCard}>
      <div className={Styles.image}>
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

      <div className={Styles.cart}>
        <AiOutlineShoppingCart size={25} />
        Add To Cart
      </div>
    </div>
  );
};

export default ProductsCard;
