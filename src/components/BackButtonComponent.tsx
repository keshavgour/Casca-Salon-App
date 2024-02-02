import { ArrowBack } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import React from 'react'

interface IPROPS {
    onClick:() => void
}

const BackButtonComponent: React.FC<IPROPS> = ({onClick}) => {
  return (
    <Grid>
       <IconButton onClick={onClick} sx={{":hover":{backgroundColor:'#fff3e0'}}}>
                    <ArrowBack sx={{":hover":{color:'#ff9800'}}}/>
                   </IconButton>
    </Grid>
  )
}

export default BackButtonComponent
