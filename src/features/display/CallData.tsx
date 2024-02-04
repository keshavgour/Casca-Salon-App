import { Avatar, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';

const CallData = () => {

    const callData = [
        {id:1, shopName:"Galaxy Salon", callType:'Outgoing', imageURL:'https://naomisheadmasters.com/wp-content/uploads/2023/07/Beauty-Salons-For-Men-In-Panchkula.jpg'},
        {id:2, shopName:"Massage Parlor", callType:'Incoming', imageURL:'https://i.pinimg.com/736x/0d/98/13/0d981340ef172234a2b0d6d50b480625.jpg'},
        {id:3, shopName:"Amnesia", callType:'Incoming',  imageURL:'https://img.favpng.com/0/19/11/pedicure-manicure-nail-salon-beauty-parlour-png-favpng-m7cTeGwQiEWL7MngGbTMyhkPL.jpg'},
        {id:4, shopName:"Bangs on Target", callType:'Outgoing', imageURL:'https://m.media-amazon.com/images/I/41nSOi3%2B1-L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg'},
        {id:5, shopName:"Hair Force", callType:'Outgoing',  imageURL:'https://imgmedia.lbb.in/media/2023/06/64880efb156ecf24a1e150bb_1686638331890.jpg'},
   
      ]
      
  return (
    <Grid>
      { callData.map((data) => (
        
                    <Grid container justifyContent='space-between' mb={3} lg={10} margin='0 auto' pl={20}>
                            <Grid item mb={2} ml={2} lg={4}>
                              <Grid container key={data.id}>
                                    <Grid item>
                                        <Avatar src={data.imageURL} sx={{width:'60px', height:'60px'}}/>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction='column' pl={2}>
                                            <Grid item>    
                                            <Typography variant='h6' sx={{fontWeight:'bold', whiteSpace:'nowrap'}}>{data.shopName}</Typography>
                                            </Grid>
                                            <Grid item>
                                            <Typography variant='body1'>{data.callType}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                              </Grid>
                            </Grid>
                            <Grid item lg={4}>
                                <IconButton>
                                <CallIcon sx={{color:'#ff9800'}}/>
                                </IconButton>
                            </Grid>
                    </Grid>
                
                )) }
                
    </Grid>
  )
}

export default CallData
