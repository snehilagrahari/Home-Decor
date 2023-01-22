import { Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { removeOrder } from '../../redux/order/order.action';

const OrderCard = (props) => {
    let {orderDetails} = props;

    const [cancel, setCancel] = useState(false);
    const dispatch=useDispatch();
    const [ loading, setLoading] = useState(false);

    const checkCancelEligibility = useCallback(
      () => {
        for(let i=0;i<orderDetails.products.length;i++)
        {
            if(orderDetails.products[i].cancellable===false)
                return false
        }
        return true;
      },[orderDetails])

    useEffect(()=>{
        setCancel(checkCancelEligibility());
    },[checkCancelEligibility])
    

    const clickCancelOrder = ()=>{
        setLoading(true);
        dispatch(removeOrder(orderDetails.id));
    }

  return (
    <div>
        <VStack alignItems='start' p={4} border="1px solid #902735" borderRadius={'lg'} margin="20px auto" >
            <Heading size="lg">Order <Heading as="span" size="lg" color="grey">#{orderDetails.id}</Heading></Heading>
            <Heading size="md">Items :</Heading>
            <VStack alignItems={'start'} w="full">
                {
                    orderDetails.products.map(el=>{
                        return (
                            <Flex key={el.id} w="100%" direction={{base : 'column', sm :'column', md:'row'}} alignItems={{base : 'start', sm :'start', md:'center'}} justifyContent={'space-between'} p={1}>
                                <Flex alignItems="center" justifyContent={'space-between'} gap={4}>
                                    <Image src={el.images[0]} alt="product" height="90px" width="90px" border="1px solid grey" borderRadius="lg" />
                                    <VStack alignItems="flex-start"
                                    spacing={'1px'}>
                                        <Text size="md">{el.title}</Text> 
                                        <Text size="sm" color="red">Qty : {el.count}</Text>
                                    </VStack>
                                </Flex>
                                <Text size="md" color="grey">Item Price : ₹{el.price}</Text>
                            </Flex>
                        )
                    })
                }
            </VStack>
            <Text fontSize="sm" color="red">Order Total : <Text as="span" fontWeight="700" fontSize="lg">₹{orderDetails.orderTotal}</Text></Text>
            <Text fontSize="md">Order Placed on : {orderDetails.orderDate}</Text>
            <Text fontSize="sm" color="grey">Shipped to : {orderDetails.orderAddress}</Text>
            {
                cancel===true?
                (<Flex gap={10} w="full" justifyContent={'space-between'} alignItems={'flex-end'}>
                    <Text fontSize="md" color="green">Order is eligible for cancellation.</Text>
                    <Button borderRadius="lg" color="white" bgColor="#902735" onClick={clickCancelOrder} fontSize="md" isLoading={loading}>Cancel Order</Button>
                </Flex>)
                :<Text fontSize="md" color="red">**Items in your cart are not cancellable**</Text>
            }
        </VStack>
    </div>
  )
}

export default OrderCard