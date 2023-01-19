
import React from "react"
import { useState } from "react"
import { Box } from "@chakra-ui/react"
import { Wrap,WrapItem,Center,Text,Image,Button,SimpleGrid} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
const Cartfull=()=>{
    const date = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]
    let day = date.getDate()
    let month = date.getMonth()
const [data,setData]=useState([
    {

        id:102,
        img:"https://cdn.plotch.io/image/upload/w_550/C/V/PLOCX5zTZQ1673741264_95324cdaca7d44d784e9c18c1a27a8ede3baa75095aa911919f4924e15115ec6.png",
    title : "Alpino Super Muesli Nut Delight 400 G",
                from : " Alpino Health Foods",
                price :254 ,
                returnable : false,
                timeToShip : 1,
                cancellable : true,
                discount : 60,
                description : "alpino super muesli is a healthier breakfast option than pastries and breakfast sandwiches",
                category: "Packaged Foods"
           
    },
    
    
    
    
    
    {
    
        id:103,
        img:"https://cdn.plotch.io/image/upload/w_550/C/V/PLODwWXpAj1672788698_495030a5fdeb49777f669fa7169b547245efcd808276e08b452c44df223aadf3.png",
    title : "Alpino Peanut Super Cookies Nut Delight 200 G" ,
                from : " Alpino Health Foods",
                price :450 ,
                returnable : false,
                timeToShip : 3,
                cancellable : true,
                discount : 100,
                description : "alpino super cookies are a high protein supplement. it can be consumed by all",
                category: "Packaged Foods"
           
    },

    {
    
        id:103,
        img:"https://cdn.plotch.io/image/upload//C/V/PLOm16nWtz1672788571_d63c046da9388601345fb44fd0cbcb4b3aaa037a2107dfa2d8f69c7ddf19d5fb.png",
    title : "Sip N Up By, Alpino Premium Instant Coffee Espresso 50 G 50 G" ,
                from : " Alpino Health Foods",
                price :299 ,
                returnable : false,
                timeToShip : 1,
                cancellable : true,
                discount : 100,
                description : "alpino super cookies are a high protein supplement. it can be consumed by all",
                category: "Packaged Foods"
           
    },
    {

        id:102,
        img:"https://cdn.plotch.io/image/upload/w_550/C/V/PLOCX5zTZQ1673741264_95324cdaca7d44d784e9c18c1a27a8ede3baa75095aa911919f4924e15115ec6.png",
    title : "Alpino Super Muesli Nut Delight 400 G",
                from : " Alpino Health Foods",
                price :254 ,
                returnable : false,
                timeToShip : 1,
                cancellable : true,
                discount : 60,
                description : "alpino super muesli is a healthier breakfast option than pastries and breakfast sandwiches",
                category: "Packaged Foods"
           
    },
    
    
    
    
    
    {
    
        id:103,
        img:"https://cdn.plotch.io/image/upload/w_550/C/V/PLODwWXpAj1672788698_495030a5fdeb49777f669fa7169b547245efcd808276e08b452c44df223aadf3.png",
    title : "Alpino Peanut Super Cookies Nut Delight 200 G" ,
                from : " Alpino Health Foods",
                price :450 ,
                returnable : false,
                timeToShip : 3,
                cancellable : true,
                discount : 100,
                description : "alpino super cookies are a high protein supplement. it can be consumed by all",
                category: "Packaged Foods"
           
    },

    {
    
        id:103,
        img:"https://cdn.plotch.io/image/upload//C/V/PLOm16nWtz1672788571_d63c046da9388601345fb44fd0cbcb4b3aaa037a2107dfa2d8f69c7ddf19d5fb.png",
    title : "Sip N Up By, Alpino Premium Instant Coffee Espresso 50 G 50 G" ,
                from : " Alpino Health Foods",
                price :299 ,
                returnable : false,
                timeToShip : 1,
                cancellable : true,
                discount : 100,
                description : "alpino super cookies are a high protein supplement. it can be consumed by all",
                category: "Packaged Foods"
           
    }
    

])

let x=0;

data.map((item)=>{
    x=x+item.price
    
})

    return(
<Box>

    
<Wrap mt='120px' >

<WrapItem >
<Center ml={{lg:'100px',md:'100px',sm:'100px',base:'10px'}}>
<Link  >Home</Link>
<Text fontWeight={'bold'} > /My Cart</Text>
</Center>

</WrapItem>

<WrapItem>
    <Center>
        <Text ml={{xl:'500px',lg:'500px',md:'350px',sm:"80px",base:"5px"}} fontWeight={'bold'}>SubTotal: ₹ {x}</Text>
        <Button  ml='80px' bg='#902735' w={{lg:"200px",md:"200px",sm:"200px",base:"100px"}} color={'white'} _hover={{ bg:'#902735'}}>Place Order</Button>
    </Center>
</WrapItem>
</Wrap>

<Text ml={{xl:"-1040px",lg:'-700px',md:"-460px",sm:"-200px",base:"-175px"}} fontWeight={'bold'}>My Cart({data.length} Items)</Text>




<SimpleGrid columns={{xl:3,lg:2,md:2,sm:1,base:1}} spacing='-40px' ml='10px' mt='50px'>


{

data.map((item)=>{



    return<Center display={'block'} borderRadius='10px' border='1px solid gray' w={{xl:"440px",lg:"440px",md:"340px",sm:"300px",base:"250px"}} h={{xl:'460px',lg:'460px',md:"480px",base:"510px",sm:"480px"}} ml={{sm:"170px",xl:"0px",md:"0px",lg:"0px",base:"50px"}} mt='20px'>
     <Image m=' 30px auto auto  auto' src={item.img} w='200px' h='200px'/>
     <Text color='gray.500' fontWeight={'bold'} mt='10px' fontSize={'14px'}>{item.title}</Text>
     <Center mt='16px'>
        <Button mr='20px' color='black' bg='purple.300'  ><Text fontSize={'30px'}>-</Text></Button>
        <Text>1</Text>
        <Button ml='20px' color='black'  bg='purple.300' ><Text fontSize={'25px'}>+</Text></Button>
        
     </Center>
     <Text mt='19px' fontSize={'15px'} fontWeight={'bold'} color='gray.500'>Price: ₹ {item.price}</Text>
     <Text mt='10px' fontSize={'15px'} fontWeight={'bold'} color='gray.500' >Estimated delivery time {day+item.timeToShip+" "}{monthNames[month]} 2023</Text>
    
     <Button mt='15px' color='black'  bg='purple.300' ><Text fontSize={'15px'}>Remove</Text></Button>
        
    
    </Center>
})







}









</SimpleGrid>


<Wrap justify={'center'}  mt='40px'>
    <WrapItem >
        <Center display={'block'} >
<Text mt='10px' fontSize={'30px'} fontWeight={'bold'} >Price Details</Text>
<Text mt='10px' fontSize={'30px'} fontWeight={'bold'} color='gray.500'>Subtotal: ₹ {x} </Text>
<Button mt='18px' mb='15px'  bg='#902735' w='200px' color={'white'} _hover={{ bg:'#902735'}}>Place Order</Button>

        </Center>
    </WrapItem>
</Wrap>




</Box>
    )
}

export default Cartfull