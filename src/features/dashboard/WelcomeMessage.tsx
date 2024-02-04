import { Grid, Typography } from '@mui/material'
import React from 'react'
import WavingHandIcon from '@mui/icons-material/WavingHand';

export const WelcomeMessage = () => {
  return (
      <Grid container>
      <Grid item>
        <Typography variant='h4' >Morning, Jay</Typography>
      </Grid>
      <Grid item pl={1.6}>
        <WavingHandIcon sx={{color:'#ff9800'}} fontSize='large'/>
      </Grid>
      </Grid>
  )
}


