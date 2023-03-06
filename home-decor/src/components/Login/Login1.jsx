import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

import firebase from './firebase'




import box from "../../assets/box.png";
import cart from "../../assets/tag.png";
import tag from "../../assets/cart.png";
import { useRef } from "react";
import { checkNumber, Login, Signup } from "../../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { ImUser } from "react-icons/im";

const Login1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const toast = useToast()
  const inputRef = useRef();
const [lenno,setLenno]=useState(false)
const [otpget,setOtpget]=useState(false)
  const [no, setNo] = useState("");
  const [next, setNext] = useState(false);
  const [otp, setOtp] = useState("");

  const handleInputChange = (e) => {
    inputRef.current.style.border = "1px solid grey";
    inputRef.current.style.color = "black";
    setNo(e.target.value);
  };

  const handleContinueClick = () => {
    if (no.length == 10) {
      
     ;
    } else {
     
    }
  };

  const handleOTPClick = async () => {
    if (otp != "1234") {
      return;
    } else {
        ;
    }
  };

  














if(otpget==true){
 
  return (
    
    toast({
      title: 'Login Succesfully',
      
      status: 'success',
      
      position:"top",
      isClosable: true,
    })

  
  )
  
  }









  
  const handlePinChange = (val) => {
    setOtp(val);
  };
  
  
  

  let configureCaptcha=()=>{

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      },
      defaultCountry:"IN"
    });
    
  }


  let onSignInSubmit=()=>{

    const phoneNumber = "+91"+no;
    configureCaptcha()
  const appVerifier = window.recaptchaVerifier;
  firebase.auth().signInWithPhoneNumber(phoneNumber,appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        console.log("otp send")
        console.log(confirmationResult)
        setNext(true)
       
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
       
        inputRef.current.style.border = "1px solid red";
        inputRef.current.style.color = "red";
        
      });
  }
  
  



  const  varif=()=>{
    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      // ...
   
      console.log(JSON.stringify(user))
  if(JSON.stringify(user.phoneNumber)!=null){
    console.log("user is verified")
    again()
      setOtpget(true)

      setTimeout(()=>{
        setOtpget(false)
      },1000)

  }
    
  
     
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log(error)
      console.log("user is not varified")
    });
    
  
  }


const again=async()=>{
setLoading(true)
let id= await checkNumber(no)
if(id!=false) dispatch(Login(id))
else dispatch(Signup(no));
setLoading(false)
}


  
  
  
  return (
    <Box>
      <Flex>
        <ImUser as="span" size={"25px"} color="white" onClick={onOpen} />
        <Text
          as="span"
          display={{ base: "none", sm: "none", md: "block" }}
          onClick={onOpen}
          cursor="pointer"
        >
          Sign in/Register
        </Text>
      </Flex>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ sm: "xl", md: "3xl" }}
      >
        <ModalOverlay />
        <ModalContent p={10}>
          <Flex gap={4}>
            <VStack
              display={{ base: "none", sm: "none", md: "flex" }}
              flex={4}
              gap={4}
            >
              <Heading size="lg">BENEFITS</Heading>
              <Center>
                <VStack textAlign="center">
                  <Image src={box} alt="box image" />
                  <Heading size="md">Manage Orders</Heading>
                  <Text>Track, Return & Cancel your orders</Text>
                </VStack>
              </Center>
              <Center>
                <VStack textAlign="center">
                  <Image src={tag} alt="tag image" />
                  <Heading size="md">Access Products that you love</Heading>
                  <Text>Seamless access to Wishlist & Cart items</Text>
                </VStack>
              </Center>
              <Center>
                <VStack textAlign="center">
                  <Image src={cart} alt="cart bucket image" />
                  <Heading size="md">Quicker Checkout</Heading>
                  <Text>
                    Saved Addresses & bank details Text3 step checkout
                  </Text>
                </VStack>
              </Center>
            </VStack>
            <VStack alignItems="start" flex={6} gap={2}>
              <ModalHeader mb={10} fontSize="3xl" color="#902735">
                Home Decor
              </ModalHeader>
              <Text
                fontSize="xl"
                textDecoration={"underline"}
                fontWeight="bold"
              >
                Login/SignUp
              </Text>

              {next ? (
                <>
                  <Text>Please Enter OTP sent via prompt to your browser.</Text>
                  <HStack
                    mt={"20px"}
                    mb={"30px"}
                    display="flex"
                    justifyContent={"center"}
                  >
                    <PinInput otp value={otp} onChange={handlePinChange}>
                      <PinInputField
                        border={"none"}
                        borderBottom="1px solid"
                        borderRadius={"none"}
                        w="50px"
                      />
                      <PinInputField
                        border={"none"}
                        borderBottom="1px solid"
                        borderRadius={"none"}
                        w="50px"
                      />
                      <PinInputField
                        border={"none"}
                        borderBottom="1px solid"
                        borderRadius={"none"}
                        w="50px"
                      />
                      <PinInputField
                        border={"none"}
                        borderBottom="1px solid"
                        borderRadius={"none"}
                        w="50px"
                      />
                      <PinInputField
                        border={"none"}
                        borderBottom="1px solid"
                        borderRadius={"none"}
                        w="50px"
                      />
                      <PinInputField
                        border={"none"}
                        borderBottom="1px solid"
                        borderRadius={"none"}
                        w="50px"
                      />
                    </PinInput>
                  </HStack>
                  <Button
                    marginTop={10}
                    colorScheme="red"
                    display={'block'}
                    isLoading = {loading}
                    margin={{base: 'auto', sm : 'auto', md : '3px'}}
                    onClick={()=>varif()}
                  >
                    Submit
                  </Button>
                </>
              ) : (
                <>
                  <Input
                    value={no}
                    onChange={handleInputChange}
                    ref={inputRef}
                    placeholder="Mobile Number"
                    type="number"
                    w="full"
                  />
                  <Text fontSize={"10px"} textAlign="right" w="full">
                    {no.length}/10
                  </Text>
                  <Button
                  id="sign-in-button"
                    colorScheme="red"
                    mr={3}
                    onClick={()=>onSignInSubmit()}
                  >
                    Continue
                  </Button>
                </>
              )}
            </VStack>
          </Flex>

          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login1;
