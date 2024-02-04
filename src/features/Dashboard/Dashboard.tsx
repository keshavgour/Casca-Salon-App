import { AppBar, Container, Grid } from '@mui/material'
import React from 'react'
import { Navbar } from './Navbar'
import Search from '../Search'
import { Services } from './Services'
import CarouselData from './CarouselData'
import { Nearby } from './Nearby'
import { WelcomeMessage } from './WelcomeMessage'


export const Dashboard = () => {
    
  return (
    <Container>
    <Grid container spacing={4} direction='column' alignItems='center'>
        <Grid item>
          <AppBar position='fixed' sx={{backgroundColor:'white'}}>
            <Navbar pageHeading='Casca'/>
          </AppBar>
        </Grid>
        <Grid item sx={{marginTop:'64px'}}>
        <WelcomeMessage />
        </Grid>
        <Grid item>
        <Search />
        </Grid>
        <Grid item>
        <CarouselData />
        </Grid>
        <Grid item>
        <Services />
        </Grid>
        <Grid item>
        <Nearby typographyData='Nearby Your Location' seeAll='See All' />
        </Grid>
        <Grid item>
        <Nearby typographyData='Most Popular' seeAll='See All'/>
        </Grid>
        {/* <Grid item> 
        <MostPopularData />
        </Grid> */}
    </Grid>
    </Container>
  )
}


