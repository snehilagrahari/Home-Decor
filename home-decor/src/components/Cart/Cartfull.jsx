
import React from "react"
import { useState } from "react"
import { Box } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems,removeItemFromCart } from "../../redux/Cart/cart.actions";
import { Wrap,WrapItem,Center,Text,Image,Button,SimpleGrid} from "@chakra-ui/react"
import { updateCartItem } from "../../redux/Cart/cart.actions";
import Footer from "../Footer";
import { Link } from "react-router-dom"
import { useEffect } from "react"
import CartEmpty from "./CartEmpty";
const Cartfull=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const{loading,error,datas}=useSelector((state)=>state.cart)
    const date = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]



    let day = date.getDate()
    let month = date.getMonth()






useEffect(()=>{
    dispatch(getCartItems())
   
  },[])
 
  


const handleDelete=(id)=>{
dispatch(removeItemFromCart(id))


}



const Inc=(item)=>{

}

const Dec=(item,newcount,id)=>{
    console.log(id)
  console.log(item,"all ok") 
  console.log(newcount) 
  dispatch(updateCartItem(item.id,{count:newcount}))
  dispatch(getCartItems())
}









if(datas.length==0){
    return <CartEmpty/>
}else{
var k=0;
    var z;
if(datas[0].products){
 z=datas[0].products.length;
datas[0].products.map((item)=>{
k=k+item.price
})
}


    return(


<Box>

    
<Wrap mt='120px' >

<WrapItem >
<Center ml={{lg:'100px',md:'100px',sm:'100px',base:'10px'}}>
<Link to={"/"} >Home</Link>
<Text fontWeight={'bold'} > /My Cart</Text>
</Center>

</WrapItem>

<WrapItem>
    <Center>
        <Text ml={{xl:'500px',lg:'500px',md:'350px',sm:"80px",base:"5px"}} fontWeight={'bold'}>SubTotal: ₹ {k}</Text>
        <Button  ml='80px' bg='#902735' w={{lg:"200px",md:"200px",sm:"200px",base:"100px"}} color={'white'} _hover={{ bg:'#902735'}}>Place Order</Button>
    </Center>
</WrapItem>
</Wrap>

<Text ml={{xl:"-1040px",lg:'-700px',md:"-460px",sm:"-200px",base:"-175px"}} fontWeight={'bold'}>My Cart ( {z} Items) </Text>




<SimpleGrid columns={{xl:3,lg:2,md:2,sm:1,base:1}} spacing='-40px' ml='10px' mt='50px'>


{
datas[0].products?datas[0].products.map((item)=>{



    return<Center key={item.id} display={'block'} borderRadius='10px' border='1px solid gray' w={{xl:"440px",lg:"440px",md:"340px",sm:"300px",base:"250px"}} h={{xl:'460px',lg:'460px',md:"480px",base:"510px",sm:"480px"}} ml={{sm:"170px",xl:"0px",md:"0px",lg:"0px",base:"50px"}} mt='20px'>
    <Image m=' 30px auto auto  auto' src={item.images
[0]} w='200px' h='200px'/>
     <Text color='gray.500' fontWeight={'bold'} mt='10px' fontSize={'14px'}>{item.title}</Text>
     <Center mt='16px'>
        <Button  onClick={()=>Dec(item,item.count-1,datas[0].id)}  mr='20px' color='black' bg='purple.300'  ><Text fontSize={'30px'}>-</Text></Button>
        <Text>{item.count}</Text>
        <Button onClick={()=>Inc(item,item.count+1)} ml='20px' color='black'  bg='purple.300' ><Text fontSize={'25px'}>+</Text></Button>
        
     </Center>
     <Text mt='19px' fontSize={'15px'} fontWeight={'bold'} color='gray.500'>Price: ₹ {item.price}</Text>
     <Text mt='10px' fontSize={'15px'} fontWeight={'bold'} color='gray.500' >Estimated delivery time {day+item.timeToShip
+" "}{monthNames[month]} 2023</Text>
    
     <Button onClick={()=>handleDelete(item.id)} mt='15px' color='black'  bg='purple.300' ><Text fontSize={'15px'}>Remove</Text></Button>
        
    
    </Center>
}):""







}









</SimpleGrid>


<Wrap justify={'center'}  mt='40px'>
    <WrapItem >
        <Center display={'block'} >
<Text mt='10px' fontSize={'30px'} fontWeight={'bold'} >Price Details</Text>
<Text mt='10px' fontSize={'30px'} fontWeight={'bold'} color='gray.500'>Subtotal: ₹ {k} </Text>
<Button mt='18px' mb='35px'  bg='#902735' w='200px' color={'white'} _hover={{ bg:'#902735'}}>Place Order</Button>

        </Center>
    </WrapItem>
</Wrap>


<Footer/>

</Box>
) }
}

export default Cartfull
