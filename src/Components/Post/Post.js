// import { Avatar } from '@mui/material'
import  Avatar  from '@material-ui/core/Avatar'
import React from 'react'
import './Post.css'
import post1 from '../../images/post1.jpg'
import post2 from '../../images/post2.jpg'
import post3 from '../../images/post3.jpg'
import ndot from '../../images/ndot.webp'



const Post = () => {
  return (
    <div className='post__container'>
        
        <div className='post__container1'>
            <Avatar className='post__images' src='' style={{"maxWidth":"22px","maxHeight":"20px"}}  />
            <div className='post__username'>username</div>
            <img src={ndot} className='dot_img' />

        </div>
        <div>
            <img src={post1} width='410px'/>
        </div>
        <div className='post__container1'>
            <Avatar className='post__images' src='' style={{"maxWidth":"22px","maxHeight":"20px"}}  />
            <div className='post__username'>username</div>
            <img src={ndot} className='dot_img' />
        </div>
        <div>
            <img src={post2} width='410px'/>
        </div>
        <div className='post__container1'>
            <Avatar className='post__images' src='' style={{"maxWidth":"22px","maxHeight":"20px"}}  />
            <div className='post__username'>username</div>
            <img src={ndot} className='dot_img' />
        </div>
        <div>
            <img src={post3} width='410px'/>
        </div>
        <div className='post__container1'>
            <Avatar className='post__images' src='' style={{"maxWidth":"22px","maxHeight":"20px"}}  />
            <div className='post__username'>username</div>
            <img src={ndot} className='dot_img' />
        </div>
        <div>
            <img src={post1} width='410px'/>
        </div>
        
    </div>
  )
}

export default Post