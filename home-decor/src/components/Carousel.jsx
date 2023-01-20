import {   Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import {BiLeftArrowCircle,BiRightArrowCircle} from 'react-icons/bi'
import {  useNavigate } from 'react-router-dom'

const imageData= [
    {
        link : "/search?q=home+decor",
        image : carousel1
    },
    {
        link : "/search?q=home+decor",
        image : carousel2
    },
    {
        link : "/search?q=kitchen+ware",
        image : carousel3
    }
]






const Carousel = () => {


    const navigate = useNavigate();

    const HandleRightClick = ()=>{
        var current = document.getElementById('carousel-image').scrollLeft;
        var w = window.innerWidth;
        if(current>(1.5*w))
        {
            document.getElementById('carousel-image').scrollTo({
                top: 0,
                left : 0,
                behavior : "smooth"
            });
        }
        else
        {
            document.getElementById('carousel-image').scrollTo({
                top: 0,
                left : current+w,
                behavior : "smooth"
            });
        }  
    }

    const HandleLeftClick = ()=>{
        var current = document.getElementById('carousel-image').scrollLeft;
        console.log(current);
        var w = window.innerWidth;
        console.log(w);
        if(current===0)
        {
            document.getElementById('carousel-image').scrollTo({
                top: 0,
                left : w*2,
                behavior : "smooth"
            });
        }
        else
        {
            document.getElementById('carousel-image').scrollTo({
                top: 0,
                left : current-w,
                behavior : "smooth"
            });
        }  
    }

    useEffect(() => {
        let time = setInterval(() => {
          HandleRightClick();
        }, 8000);
      
        return () => {
          clearInterval(time);
        }
      }, [])

      const handleClick = (text)=>{
        navigate(text);
      }
      
  return (
    <div style={{position : 'relative'}}>
        <Flex id="carousel-image" w='full' overflow={'hidden'} >
            {
                imageData.map((el,i)=>{return (
                    <Image src={el.image} 
                    key={i+1} 
                    width="100%" 
                    alt="carouselImage" 
                    w="full" 
                    cursor="pointer" 
                    onClick={()=>handleClick(el.link)}
                    />
                )})
            }
        </Flex>
        <Button 
        variant="ghost" 
        color="blue"
        borderRadius={'50%'}
        fontSize="3xl"
        fontWeight={'500'} 
        position="absolute"
        top={'40%'}
        right={'20px'}
        onClick={HandleRightClick}><BiRightArrowCircle size="40px" color="black" /></Button>

        <Button 
        variant="ghost" 
        color="blue"
        borderRadius={'50%'}
        fontSize="3xl"
        fontWeight={'500'} 
        position="absolute"
        top={'40%'}
        left={'20px'}
        onClick={HandleLeftClick}><BiLeftArrowCircle size="40px" color="black" /></Button>
    </div>
  )
}

export default Carousel