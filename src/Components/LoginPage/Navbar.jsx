import React from 'react'
import logo from '../../images/logo.png'
import home from '../../images/home.svg'
import like from '../../images/like.svg'
import compass from '../../images/compass.jpg'
import message from '../../images/message.svg'
import dp6 from '../../images/dp6.png'
// import { Grid } from '@mui/material/'
import  Grid  from '@material-ui/core/Grid'
import  Avatar  from '@material-ui/core/Avatar'

import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <div className='navbar__barContent'>
            <Grid container>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={3}>
                    <img className='navbar_logo' src={logo} width='85px'/>

                </Grid>
                <Grid item xs={3}>
                   <input type='text' className='navbar_searchBar' placeholder='search' />

                </Grid>
                <Grid item xs={3} style={{"display":"flex"}}>
                    <img  className='navbar__img' src={home} width='25px' />

                    <img className='navbar__img' src={message} width='25px' />
                    <img className='navbar__img' src={compass} width='25px' height='23px' />
                    <img className='navbar__img' src={like} width='27px'  height='23px'/>
                    <Avatar src={dp6} className="navbar__img" style={{"maxHeight":"30px","maxWidth":"30px"}}/>
                                     
                   
                </Grid>
                <Grid item xs={1}></Grid>


            </Grid>
        </div>
    </div>
  )
}

export default NavBar

















// import React from 'react'
// import logo from '../../images/logo.png'
// import home from '../../images/home.svg'
// import message from '../../images/message.svg'
// import { Grid } from '@mui/material/'

// const Navbar = () => {
//   return (
//     <div>
//         <div className="navbar__barContent">
//             <Grid container>
//                 <Grid item xs={4}>
//                 <img className='navbar_logo' src={logo} width='105px'/>

//                 <div className='Appbar_mainDiv'>
//                     <div> 
//                     {/* <div><img src={logo} /></div> */}
//                         <div className='sideDiv'><span><img src={home} height='30px' /></span> Home</div>
//                         <div className='sideDiv'>Search</div>
//                         <div className='sideDiv'>Explore</div>
//                         <div className='sideDiv'>Reels</div>
//                         <div className='sideDiv'>Home</div>
//                         <div className='sideDiv'>Search</div>
//                         <div className='sideDiv'>Explore</div>
//                         <div className='sideDiv'>Reels</div>
//                     </div>
//                 </div>
//                 </Grid>
//                 <Grid item xs={5} >
//                     <div className='AppBar_header'></div>
//                 <input type='text' className='navbar_searchBar' placeholder='search' />
//                     heyyy
//                 </Grid>
//                 <Grid item xs={4}>
                      
//                     hellooo
//                 </Grid>
                
//                 <Grid item xs={0.5} style={{"display":"flex"}}>
                   
//                     <img src={message} width='25px' />
//                     <img src='' width='25px' />
//                     <img src='' width='25px' />
                  

//                 </Grid>
//             </Grid>
//         </div>
//     </div>
//   )
// }

// export default Navbar