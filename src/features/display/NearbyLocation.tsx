import { Container, Grid, IconButton } from '@mui/material'
import React from 'react'
import Nearby from '../Dashboard/Nearby'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const NearbyLocation = () => {
    const navigate = useNavigate();

    const clickBack = () => {
        return (
            navigate("/")
        )
    }
  return (
    <Container>
        <Grid container>
        <Grid item >
                   <IconButton onClick={clickBack} sx={{":hover":{backgroundColor:'#fff3e0'}}}>
                    <ArrowBackIcon sx={{":hover":{color:'#ff9800'}}} />
                   </IconButton>
                </Grid>
        </Grid>
       <Nearby typographyData='Nearby Your Location' seeAll='' /> 
    </Container>
  )
}

export default NearbyLocation
