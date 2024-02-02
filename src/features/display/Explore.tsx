import { AppBar, Container, Grid } from '@mui/material'
import React from 'react'
import { Navbar } from '../dashboard'

export const Explore = () => {
  return (
    <Container>
    <Grid container>
        <Grid item>
            <AppBar position='fixed' sx={{backgroundColor:'white'}}>
            <Navbar pageHeading='Explore' />
            </AppBar>
        </Grid>
    </Grid>
    </Container>
  )
}

