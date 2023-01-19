import React from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { ImUser, ImCart } from "react-icons/im"
import { BsSuitHeart } from 'react-icons/bs'
import styles from "../styles/Navbar.module.css"

export const Navbar1 = () => {
  return (
    <div className={styles.main_div_1}>
      <div className={styles.img_div}>
        <img src={'Images/Logo.png'} alt="home decor logo" />
      </div>
      <div className={styles.input_icon}>
        <p>Search </p>
        <input type="text" />
        <span><Search2Icon /></span>
      </div>
      <div className={styles.last_div}>
        <div className='sign_div'>
          <span><ImUser /></span>
          <p>Sign In / Register</p>
        </div>
        <div className={styles.wishlist_div}>
          <span><BsSuitHeart /></span>
          <p>Wishlist </p>
        </div>
        <div className={styles.cart_div}>
          <span><ImCart /></span>
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}

export const Navbar2 = () => {
  return  <nav data-spy="affix" data-offset-top="197">
   <div className={styles.main_div_2}  >
    <div>
      <div>
        <p>Home Decor</p>
      </div>
      <div>
        <p>Products Near me</p>
      </div>
    </div>
  </div>
  </nav>
}

