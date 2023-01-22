import styles from './Login.module.css'
import box from "../../assets/box.png"
import tag from "../../assets/tag.png"
import cart from "../../assets/cart.png"
import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
const Login = () => {
    const [no, setNo] = useState('');
    const [continues, setContinues] = useState(false)
    // const [otps,setOtps]=useState('')
   
  const navigate=useNavigate()
    const handleContinue = () => {
        if (no.length === 10) {
            setContinues(true)
        }
    }
    return (
        <div>
            <div className={styles.main_div}>
                <div className={styles.child_div_1}>
                    <p>BENEFITS</p>
                    
                </div>
                <div className={styles.child_div_2}>
                    <div>
                        <img src={logo} alt="" width={'60px'} />
                    </div>
                    {
                        continues ?
                            <div>
                                <h4>Login</h4>
                                <p>
                                    Please enter OTP sent to your mobile or
                                    change your number
                                </p>
                                <HStack  mt={'20px'} mb={'30px'} display='flex' justifyContent={'center'} >
                                    <PinInput>
                                        <PinInputField border={'none'} borderBottom='1px solid' borderRadius={'none'} w='50px' />
                                        <PinInputField border={'none'} borderBottom='1px solid' borderRadius={'none'} w='50px' />
                                        <PinInputField border={'none'} borderBottom='1px solid' borderRadius={'none'} w='50px' />
                                        <PinInputField border={'none'} borderBottom='1px solid' borderRadius={'none'} w='50px' />
                                    </PinInput>
                                </HStack>
                                <button  onClick={()=>navigate('/')}>LOGIN</button>
                            </div>
                            :
                            <div>
                                <h4>Login / SignUp</h4>
                                <p>Please provide your Mobile No.</p>
                                <input type="number" placeholder='Enter 10 digit Mobile No.' onChange={(e) => { setNo(e.target.value) }} />
                                <button onClick={handleContinue} >CONTINUE</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login