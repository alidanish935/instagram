import React from 'react'
import './statusBar.css'
import { Avatar } from '@mui/material'
import pp2 from '../../images/pp2.png'
import pp3 from '../../images/pp2.png'


const StatusBar = () => {
  return (
    <div className='statusbar__maincontainer'>
         <div className='statusbar__container'>
            <div className='status'>
                <Avatar className='statusbar__status' src={pp2}/>
                <div className='statusbar__text'>Danish</div>
            </div>
            <div className='status'>
                <Avatar className='statusbar__status' src={pp3}/>
                <div className='statusbar__text'>Danish</div>
            </div>
            <div className='status'>
                <Avatar className='statusbar__status' src={pp2}/>
                <div className='statusbar__text'>Danish</div>
            </div>
            <div className='status'>
                <Avatar className='statusbar__status' src={pp3}/>
                <div className='statusbar__text'>Danish</div>
            </div>
            <div className='status'>
                <Avatar className='statusbar__status' src={pp2}/>
                <div className='statusbar__text'>Danish</div>
            </div>
            <div className='status'>
                <Avatar className='statusbar__status' src={pp3}/>
                <div className='statusbar__text'>Danish</div>
            </div>
            
        </div>
    </div>
  )
}

export default StatusBar