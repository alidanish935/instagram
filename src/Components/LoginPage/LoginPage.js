import { Grid } from '@mui/material'
import mobview from '../../images/mobview.svg'
import logo from '../../images/logo.png'
import fb from '../../images/fb.png'
import app from '../../images/app.png'
import googleplay from '../../images/googleplay.png'
import { useGoogleLogin } from '@react-oauth/google';
// import './LoginPage.css'
import { Link } from "react-router-dom";


import React, { useState } from 'react'

const LoginPage = () => {
    const[user,setUser]=useState(null)
    const loginFn = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
      });
    return (
        <div>


            {/* <Grid container> */}
                {/* <Grid item xs={2}>
                    Hello
                </Grid> */}
                {/* <Grid item xs={3}> */}
                    <div className='loginpage__main'>
                        <div className='mobile'>
                            <img src={mobview} width='250px' />
                        </div>
                        <div>
                            
                            <div className='loginpage_rightcomponent'>
                                <img className='loginpage__logo ' src={logo} width='300px' />    
                                  <div className='loginPage__signin'>
                                    <input  type='text'className='loginpage__text' placeholder='username'/><br/>
                                    <input className='loginpage__text' type='password'  placeholder='password'/><br/>
                                    <button className='login__button'>Sign In</button><br></br>
                                    <button onClick={() => loginFn()} className="login-input-btn">Sign in with Google 🚀 </button>
                                 </div>
                                 <div className='login__ordiv '>
                                    <div className='login__dividor'></div>
                                    <div className='login__or'>OR</div>
                                    <div className='login__dividor'></div>
                                </div>  
                                <div className='login__fb'>
                                    <Link to='https://www.facebook.com/'><img src={fb} width='12px' className='fb__img' /> Log in with Facebook</Link>
                                </div>   
                                <div className='login__forgot'> <Link to='/ForgotPassword'>Forgot Password?</Link> </div>                                 
                            </div>
                            <div className='loginpage_signup'>Don't have an account? <Link to='/SignUpForm'>Sign Up</Link> </div>
                            <div className='loginpage_app'>Get the app
                               <div> </div>
                               {/* <div><img src={app} className='apple'/> <img src={googleplay} className='apple'/></div> */}
                    <div> <Link to='https://apps.apple.com/in/app/google/id284815942'><img src={app} className='apple' /></Link><Link to='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwippPzo1sL9AhWFxJYKHQRiAN8YABAAGgJ0bA&ohost=www.google.com&cid=CAESaeD2XoWr8d_H3oHZtrhaNZqbLpDPl2JWEyfTlKImfCftz7_8gPWUCTUtW9Dxu5ESIBpAcIFZ-OuR6fCdmRZ2MiROMHZEHJ4pZnlLg6W05oVBSVbnYt0DpezR2hgV2ZBK8F-Ak8uIsYQ6Sw&sig=AOD64_1fRKA8oBSWngKfb-g_1Zp9oj8Hzg&q&adurl&ved=2ahUKEwjFwPXo1sL9AhWD_mEKHb-ZBxIQ0Qx6BAgJEAE'><img src={googleplay} className='apple' /></Link> </div>

                            </div>
                        </div>
                        
                    </div>
                {/* </Grid>
                <Grid item xs={3}>
                    simpler
                </Grid>
            </Grid> */}
            <div className='footerPara'>Meta&nbsp;&nbsp; About&nbsp;&nbsp; Blog&nbsp;&nbsp; Jobs&nbsp;&nbsp; Help&nbsp;&nbsp; API&nbsp;&nbsp; Privacy&nbsp;&nbsp; Terms&nbsp;&nbsp; TopAccounts&nbsp;&nbsp; Locations&nbsp;&nbsp; Instagram Lite&nbsp;&nbsp; Contact Uploading&nbsp; & &nbsp;Non-Users &nbsp;&nbsp; Meta Verified</div>
            <div className='copyright'>English&nbsp;&nbsp;  ©2023 Instagram from Meta</div>
        </div>
    )
}

export default LoginPage