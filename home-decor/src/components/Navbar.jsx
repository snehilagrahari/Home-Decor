import React from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { ImUser, ImCart } from "react-icons/im"
import { BsSuitHeart } from 'react-icons/bs'
import styles from "../styles/Navbar.module.css"
import { Logout } from '../redux/auth/auth.actions'
import { useDispatch, useSelector } from 'react-redux'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { AUTH_SIGN_OUT } from '../redux/auth/auth.types'


export const Navbar1 = () => {
  const isAuth = useSelector((store) => store.auth.isAuthenticated)

  const dispatch = useDispatch();

  const handleClick=()=>{
    dispatch({type : AUTH_SIGN_OUT})
  }
  console.log(isAuth)
  return (
    <div className={styles.main_div_1}>
      <div className={styles.img_div}>
        <img src={'Images/Logo.png'} alt="home decor logo" />
      </div>
      <div className={styles.input_icon}>
        <p>Search </p>
        <input type="text" />
        <span><Search2Icon w={5} h={5} /></span>
      </div>
      <div className={styles.last_div}>
        <div className='sign_div'>
          <span><ImUser size={'25px'} /></span>
          {isAuth?<Menu>
            <MenuButton as={"Button"} rightIcon={<ChevronDownIcon />}>
              Account
            </MenuButton>
            <MenuList color={'black'}>
              <MenuItem>My Account</MenuItem>
              <MenuItem>My Orders</MenuItem>
              <MenuItem>My Cart</MenuItem>
              <MenuItem onClick={handleClick}>SignOut</MenuItem>
            </MenuList>
          </Menu>:<p>Sign in/Register</p> }

        </div>
        <div className={styles.cart_div}>
          <span><ImCart size={'25px'} /></span>
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}




