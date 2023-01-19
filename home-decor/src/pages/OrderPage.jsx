import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from '../components/Orders/OrderCard'
import { getOrders } from '../redux/order/order.action';

const OrderPage = () => {

  const dispatch = useDispatch();
  const orders = useSelector((store)=>store.userOrder.orders);
  console.log(orders);
    

    useEffect(()=>{
      dispatch(getOrders('1243'));
    },[])

  return (
    <div style={{width : '90%', margin : "auto"}}>
        <Heading as="h2" size="xl" textAlign={'left'} marginBottom={4}>Your Orders</Heading>
        {
            orders && orders.map(el=>{
                return <OrderCard key={el.id} orderDetails={el} />
            })
        }
    </div>
  )
}

export default OrderPage