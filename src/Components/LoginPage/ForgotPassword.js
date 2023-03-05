import React from 'react'
import logo from '../../images/logo.png'
import lockIcon from '../../images/lockIcon.png'

import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        // 'signup_maindiv'
        <div className='forgot_maindiv'>
            {/* <div> */}
                <div>
                    <img className='loginpage__logo ' src={logo} width='300px' />

                </div>

                <div className='signup_main'>
                    <div> <img src={lockIcon} width='100px' /> </div>
                    <div className='forgot_trouble'>Trouble logging in?</div>
                    <div className='signup_firsttext'>Enter your email, phone, or username and we'll send you a link to get back into your account.</div>
                    <input type='text' className='loginpage__text' placeholder='Mobile Number or Email' /><br />
                    <button className='login__button'>Send login link</button>
                    <div className='cant_reset'><Link to='https://help.instagram.com/374546259294234'>Can't reset password</Link></div>
                    <div className='login__ordiv '>
                        <div className='login__dividor'></div>
                        <div className='login__or'>OR</div>
                        <div className='login__dividor'></div>
                    </div>
                    <div className='newaccount'><Link to='/SignUpForm'>Create new account</Link></div>
                </div>
                <div className='backtologin_div'>
                    <div className='backtologin'><Link to='/'>Back to login</Link></div>
                </div>
                <div className='signup_footerPara'><Link to='https://about.meta.com/'>Meta&nbsp;&nbsp;</Link> <Link to='https://about.instagram.com/'>About&nbsp;&nbsp;</Link>  <Link to='https://about.instagram.com/en_US/blog'>Blog&nbsp;&nbsp; </Link>Jobs&nbsp;&nbsp; Help&nbsp;&nbsp; API&nbsp;&nbsp; Privacy&nbsp;&nbsp; Terms&nbsp;&nbsp; TopAccounts&nbsp;&nbsp; Locations&nbsp;&nbsp;&nbsp; Instagram Lite&nbsp;&nbsp; Contact Uploading&nbsp; & &nbsp;Non-Users &nbsp;&nbsp; Meta Verified</div>

            {/* </div> */}
        </div>
    )
}

export default ForgotPassword