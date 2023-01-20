import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import {BiRightArrowAlt,BiLeftArrowAlt} from 'react-icons/bi';




const CarouselCard = ({data}) => {

    const HandleRightClick = ()=>{
        let box = document.getElementById('carousel-card');
        let w = window.innerWidth;
        box.scrollBy({
            top : 0,
            left : w/2,
            behavior : "smooth"
        });
    }
    const HandleLeftClick = ()=>{
        let box = document.getElementById('carousel-card');
        let w = window.innerWidth;
        box.scrollBy({
            top : 0,
            left : -w/2,
            behavior : "smooth"
        });
    }

    return (
        <Box position={'relative'} display={{base:"block",sm:"block",md:'none'}}>
        <Flex overflow="hidden" id="carousel-card" justifyContent={'start'} w="100%" margin="auto" p={5} >
        {
            data.map((el,i)=>{
                return (
                <Box minWidth={'50%'} key={i+1}>
                    <Image src={el.img} alt={el.name} w="100%" borderRadius={"lg"}/>
                </Box>
                )
            })
        }
        
        </Flex>
        <Button 
        variant="ghost" 
        bgColor="grey.400"
        fontSize={{base:"sm",sm:"sm",md:'2xl',lg:"3xl"}}
        fontWeight={'500'} 
        position="absolute"
        top={'40%'}
        right={'20px'}
        onClick={HandleRightClick}><BiRightArrowAlt color="black" /></Button>

        <Button 
        variant="ghost" 
        bgColor="grey.400"
        fontSize={{base:"sm",sm:"sm",md:'2xl',lg:"3xl"}}
        fontWeight={'500'} 
        position="absolute"
        top={'40%'}
        left={'20px'}
        onClick={HandleLeftClick}><BiLeftArrowAlt color="black" /></Button>
        </Box>
        
    )
}

export default CarouselCard