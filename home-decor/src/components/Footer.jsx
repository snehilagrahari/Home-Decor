import {  Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    Image,
} from '@chakra-ui/react'
import React from 'react'
import image1 from '../assets/visa.png'
import image5 from '../assets/netbanking.png'
import image2 from '../assets/mastercard.png'
import image3 from '../assets/amex.jpg'
import image4 from '../assets/cod.jpg'



const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'md'} mb={2} align="left">
        {children}
      </Text>
    );
  };







const Footer = () => {
  return (
    <div id="footer">
        <Box
        bg={'#902735'}
        color={'white'}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>ABOUT US</ListHeader>
                        <Text textAlign="left" fontSize="sm">India's most convenient online grocery channel Buyerapp Fresh and Smart makes your grocery shopping even simpler. We offer you the convenience of shopping for everything that you need for your home - be it fresh fruits & vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items & personal care products from a single virtual store.</Text>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>OUR COMPANY</ListHeader>
                        <Link href={'#'}>About us</Link>
                        <Link href={'#'}>Contact us</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Top Categories</ListHeader>
                        <Link href={'#'}>Groceries</Link>
                        <Link href={'#'}>Home Decor</Link>
                        <Link href={'#'}>Tote Bags</Link>
                        <Link href={'#'}>Kitchen Ware</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>POLICIES & INFO</ListHeader>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms & Conditions</Link>
                        <Link href={'#'}>Shipping Policy</Link>
                        <Link href={'#'}>Return & Refund</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box>
                <Container
                maxW={'6xl'}
                py={4}
                >
                    <ListHeader>PAYMENTS</ListHeader>
                    <Stack direction={'row'} spacing={1}>
                        <Image src={image1} alt="visa" height="30px" borderRadius="lg" />
                        <Image src={image2} alt="visa" height="30px" borderRadius="lg" />
                        <Image src={image3} alt="visa" height="30px" borderRadius="lg" />
                        <Image src={image4} alt="visa" height="30px" borderRadius="lg" />
                        <Image src={image5} alt="visa" height="30px" borderRadius="lg" />
                    </Stack>
                </Container>
            </Box>
        </Box>
    </div>
  )
}

export default Footer