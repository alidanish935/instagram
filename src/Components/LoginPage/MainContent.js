// import  Grid  from '@mui/material'
import  Grid  from '@material-ui/core/Grid'

import MainPage from '../MainPage/MainPage'
import StatusBar from '../StatusBar/StatusBar'
import React from 'react'

const MainContent = () => {
  return (
    <div>
        <Grid container>
          <Grid item ={2}></Grid>
          <Grid item ={6} className='maincontent__container' >
            <div>
            <StatusBar/>
              <MainPage/>
            </div>
          </Grid>
          <Grid >
          <Grid item ={2}></Grid>
          </Grid>
          <Grid >
          <Grid item ={2}></Grid>
          </Grid>

        </Grid>
    </div>
  )
}

export default MainContent