import { Box } from "@chakra-ui/react"
import { Wrap,WrapItem,Center,Text,Image,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Footer from "../Footer"
import { getCartItems,removeItemFromCart,addItemToCart } from "../../redux/Cart/cart.actions";
import { useDispatch } from "react-redux";
const CartEmpty=()=>{

    const dispatch=useDispatch()
return(

<Box>

<Wrap mt='120px' >

<WrapItem >
<Center ml='100px' >
<Link style={{fontColor:"red"}}>Home</Link>
<Text fontWeight={'bold'}>/ My Cart</Text>
</Center>

</WrapItem>










</Wrap>

<WrapItem>
<Center ml='100px' mt='30px' >

<Text fontWeight={'bold'}>My Cart(Items)</Text>
</Center>

</WrapItem>







<Wrap spacing='30px' justify='center' mt='-100px'>

<WrapItem >
    <Center mt='100px' display={'block'}>

<Image w='200px' h='140px' src='https://www.craftsvilla.com/assets/group-6.png'/>
<Text mt='16px'  fontSize="23px">Your Cart is Empty</Text>
<Button mt='10px' mb='50px' bg='#902735' color={'white'} _hover={{ bg:'#902735'}}>CONTINUE SHOPPING</Button>
    </Center>
</WrapItem>




</Wrap>

<Footer/>

</Box>

)


}

export default CartEmpty