import React from 'react'
import logo from '../../images/logo.png'
// import fb from '../../images/fb.png'
import app from '../../images/app.png'
import googleplay from '../../images/googleplay.png'
import { Link } from "react-router-dom";


const SignUpForm = () => {
    return (
        <>
                <div>
            <div className='signup_maindiv'>
                    <div className='signup_main '>
                        <div className='signup_logo'>
                            <img className='loginpage__logo ' src={logo} width='300px' />

                        </div>
                        <div className='signup_firsttext'>
                            Sign up to see photos and videos from your friends.<br />
                            <button className='login__button'><Link to='https://www.facebook.com/'>Log in with Facebook</Link></button>
                        </div>
                        <div className='login__ordiv '>
                                    <div className='login__dividor'></div>
                                    <div className='login__or'>OR</div>
                                    <div className='login__dividor'></div>
                                </div>
                        <div className='signup_input'>
                            <input type='text' className='loginpage__text' placeholder='Mobile Number or Email' /><br />
                            <input type='text' className='loginpage__text' placeholder='Full Name' /><br />
                            <input type='text' className='loginpage__text' placeholder='username' /><br />
                            <input type='password' className='loginpage__text' placeholder='Password' /><br />

                        </div>
                        <div className='signup_info'>
                            People who use our service may have uploaded your contact information to Instagram
                            <br></br>
                            <br></br>
                            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy
                        </div>
                        <button className='login__button'>Sign up</button>


                    </div>
                </div>
                <div className='loginpage__loginUpDiv'>
                <div className='loginpage_login'>Have an account?<Link to='/'>Log In</Link></div>
                </div>
                <div className='signuppage_app'>Get the app
                    <div> </div>
                    <div> <Link to='https://apps.apple.com/in/app/google/id284815942' target="_blank"><img src={app} className='apple' /></Link><Link to='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwippPzo1sL9AhWFxJYKHQRiAN8YABAAGgJ0bA&ohost=www.google.com&cid=CAESaeD2XoWr8d_H3oHZtrhaNZqbLpDPl2JWEyfTlKImfCftz7_8gPWUCTUtW9Dxu5ESIBpAcIFZ-OuR6fCdmRZ2MiROMHZEHJ4pZnlLg6W05oVBSVbnYt0DpezR2hgV2ZBK8F-Ak8uIsYQ6Sw&sig=AOD64_1fRKA8oBSWngKfb-g_1Zp9oj8Hzg&q&adurl&ved=2ahUKEwjFwPXo1sL9AhWD_mEKHb-ZBxIQ0Qx6BAgJEAE'><img src={googleplay} className='apple' /></Link> </div>

                <div className='signup_footerPara'>Meta&nbsp;&nbsp; About&nbsp;&nbsp; Blog&nbsp;&nbsp; Jobs&nbsp;&nbsp; Help&nbsp;&nbsp; API&nbsp;&nbsp; Privacy&nbsp;&nbsp; Terms&nbsp;&nbsp; TopAccounts&nbsp;&nbsp; Locations&nbsp;&nbsp;&nbsp; Instagram Lite&nbsp;&nbsp; Contact Uploading&nbsp; & &nbsp;Non-Users &nbsp;&nbsp; Meta Verified</div>
                </div>

            </div>

        </>
    )
}

export default SignUpForm