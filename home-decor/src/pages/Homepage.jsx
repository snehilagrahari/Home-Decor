import React from "react";

import {  
    SimpleGrid,
    Image,
    Flex,
    Text,
    Box,
} from '@chakra-ui/react'

import homedecor from '../assets/homedecor.jpg'
import totebags from '../assets/totebags.jpg'
import kitchenware from '../assets/kitchenware.jpg'
import ceramic from '../assets/ceramic.jpg'
import idols from '../assets/idols.jpg'

import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import CarouselCard from '../components/CarouselCard'


import homedecor from "../assets/homedecor.jpg";
import totebags from "../assets/totebags.jpg";
import kitchenware from "../assets/kitchenware.jpg";
import ceramic from "../assets/ceramic.jpg";
import idols from "../assets/idols.jpg";

import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const ShopByCategory = [
  {
    name: "Home Decor",
    img: homedecor,
  },
  {
    name: "Tote Bags",
    img: totebags,
  },
  {
    name: "Kitchen Ware",
    img: kitchenware,
  },
  {
    name: "Ceramic Mugs",
    img: ceramic,
  },
  {
    name: "Idols",
    img: idols,
  },
];

const cardArr = [
  {
    link: "/search?q=",
    image: card1,
  },
  {
    link: "/search?q=tote+bags",
    image: card2,
  },
  {
    link: "/search?q=ceramic+mugs",
    image: card3,
  },
  {
    link: "/search?q=home+decor",
    image: card4,
  },
];

const BackgroundImage = (props) => {
  let { text, image } = props;
  return <Image src={image} alt={text} borderRadius="xl" width="100%" />;
};

const Homepage = () => {


     
     
    return (

    <div>

    
        {/* section1 */}
        <Flex 
        direction={'row'} 
        width={'80%'}

      {/* section1 */}
      <Flex
        direction={"row"}
        width={"80%"}

        margin="auto"
        spacing={3} 
        justifyContent={'center'} 
        alignItems="center" 
        marginTop={4}
        >
            <Box border="1px solid lightgray"  h='0px' flex={1} />
            <Text flex={1} textAlign="center" fontSize={{base : 'md', sm:'lg', md:'2xl', lg:'3xl'}}>Shop By Category</Text>
            <Box border="1px solid lightgray" h='0px' flex={1}/>
        </Flex>
        <SimpleGrid columns={5} spacing={'5px'} padding={4} display={{base:'none',sm:'none',md:'grid'}}>
            {
                ShopByCategory.map((el)=><BackgroundImage key={el.name} text={el.name} image={el.img} />)
            }
        </SimpleGrid>
        <CarouselCard data={ShopByCategory} />
        {/* section2 */}
            <Carousel />

        {/* section3 */}
        <Flex  width="100%" justifyContent="space-around" bgColor="black" p={'0px 20px'}>
            <Image src="https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png" width="15%" alt="none" />
            <Image src="https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png" width="15%" alt="none" />
            <Image src="https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png" width="15%" alt="none" />
            <Image src="https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png" width="15%" alt="none" />
            <Image src="https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png" width="15%" alt="none" />
        </Flex>

        {/* section4 */}
        <SimpleGrid w="80%" columns={{base : 1, sm : 1, md : 2, lg : 2}} spacing={7} padding={'40px 0px'} margin="10px auto">
            {
                cardArr.map((el,i)=>
                    <Link to={el.link} key={el.link}>
                    <Image key={i+1} src={el.image} alt="card" width="100%" />
                    </Link>
                )
            }
        </SimpleGrid>

        {/* section5 */}
        <Footer />

    </div>
  );
};

export default Homepage;
