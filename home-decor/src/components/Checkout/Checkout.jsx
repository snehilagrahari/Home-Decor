import style from "./Checkout.module.css"
import React, { useState, useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/Cart/cart.actions";
import { useDispatch } from "react-redux";
import { HiCreditCard } from "react-icons/hi"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import {
  Wrap,
  WrapItem,
  Center,
  Text,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
const Checkout = () => {
  const dispatch = useDispatch();
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [less, setLess] = useState(true)

  const { datas } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartItems());
  
  }, [dispatch]);
  let k = 0
  if (datas) {
    datas.map((item) => {
      k = k + item.price;
    });
  }





  return (
    <div className={style.main_div}>
      <div className={style.child_md}>
        <div>
          <div className={style.step1}>
            <span>Step 1 </span>
            <span><FaCheckCircle /></span>
          </div>

          <p className={style.heading}>Shipping Details</p>
          <div className={style.ship}>
            <p>SHIP TO</p>
            <h3>XYZ</h3>
          </div>
          <div className={style.add}>
            <p>xyz place 001122</p>
            <p>zyx nagar up</p>
          </div>
          <p style={{ color: '#666666' }}>Order Confirmation will be sent on <b>xyz@gmail.com</b></p>
        </div>
        <div style={{borderLeft:"2px solid #E5E5E5",borderRight:"2px solid #E5E5E5"}}>
          <div className={style.step1} >
            <span>Step 2 </span>
          </div>
          <div className={style.head_div}>
            <p className={style.heading}>Payment</p>
            <span>| You Pay : ₹{k}</span>
          </div>
          <h4>Payment Options</h4>
          <div style={{borderTop:"1px solid #E5E5E5"}}>
            <div>
              <div className={style.debit_card} onClick={() => {
                setShow1(true);
                setShow2(false);
                setShow3(false)
              }}>
                <span><HiCreditCard /></span>
                <h3>Debit Card</h3>
                <span>{show1 ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
              </div>
              {
                show1 ?
                  <div className={style.debit_content}>
                    <div>
                      <p>Card Number</p>
                      <input type="number" />
                    </div>
                    <div>
                      <p>Name On Card</p>
                      <input type="text" style={{ letterSpacing: '1px' }} />
                    </div>
                    <div className={style.cardDate_details}>
                      <div>
                        <p>ExpiryDate</p>
                        <select name="month" id="">
                          <option value="month">month</option>
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </select>
                      </div>
                      <div>
                        <i>/</i>
                        <select name="year" id="">
                          <option value="year">year</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                        </select>
                      </div>
                      <div>
                        <p>CVV</p>
                        <input type="number" minLength={4} maxLength={4} />
                      </div>

                    </div>
                    <div className={style.button}>Pay Secaurely ₹ {k}</div>
                  </div>
                  :
                  null
              }

              <div className={style.debit_card} onClick={() => {
                setShow2(true);
                setShow1(false);
                setShow3(false)
              }} >
                <span><HiCreditCard /></span>
                <h3 style={{ marginLeft: '-80%' }}>UPI</h3>
                <span>{show2 ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
              </div>
              {
                show2 ?
                  <div className={style.debit_content}>
                    <div>
                      <p>UPI Number</p>
                      <input type="number" />
                    </div>
                    <div className={style.button}>Pay Secaurely ₹ {k}</div>
                  </div>
                  :
                  null}
            </div>

          </div>
          <div className={style.cod} onClick={() => {
            setShow3(true)
            setShow1(false)
            setShow2(false)
          }}>
            <span><HiCreditCard /></span>
            <h3>
              Cash On Delivery
            </h3>
            <span>{show3 ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
          </div>
          {show3 ? <div className={style.button}>Pay Secaurely ₹ {k}</div> : null}
        </div>
        <div>
          <div className={style.order}>
            <span>Order Details </span>
            <p onClick={()=>setLess(!less)}>{less?"See Less":"See More"}</p>
          </div>
          {less?<div className={style.order_content}>
            {datas.map((item) => {
              return (

                <div key={item.id}>
                  <img src={item.images[0]} />
                  <p>{item.description}</p>
                </div>
              );
            })
            }
          </div>:null}
          {
          less ?
            <div className={style.priceList}>
              <div>
                <p>Price</p>
                <p>₹ {k}</p>
              </div>
              <div>
                <p>Shipping</p>
                <p>+ ₹{200}</p>
              </div>
              <div>
                <p>Taxes</p>
                <p>₹ 180</p>
              </div>
            </div> 
            :
             null
             }
          <div className={style.totalPayable}>
            <p>Total Payable</p>
            <p>₹{k+180+200}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout