import { Grid, } from '@mui/material'
import React from 'react'

import SalonDataDisplay from './SalonDataDisplay';



const NearByHaircuts = () => {

    const nearbyHaircutData = [
        {id:1, shopName:"That's Cut", address:'883 Jackson Hill', distance:8.4, rating:4.1, imageURL:'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg'},
        {id:2, shopName:"Belle Curls", address:'0093 Novick Parkway', distance:1.2, rating:4.8, imageURL:'https://img.freepik.com/premium-photo/shooting-beauty-salon-barber-cuts-hair-little-boy-with-machine_137321-1649.jpg'},
        {id:3, shopName:"Pretty Parlor", address:'42 Fordem Avenue', distance:1.4, rating:4.9, imageURL:'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg'},
        {id:4, shopName:"Hair Force", address:'813 Village Drive', distance:3.4, rating:4.6, imageURL:'https://imgmedia.lbb.in/media/2023/06/64880efb156ecf24a1e150bb_1686638331890.jpg'},
        {id:5, shopName:"Serenity Salon", address:'88 Commercial Plaza', distance:4.2, rating:4.0, imageURL:'https://naomisheadmasters.com/wp-content/uploads/2023/07/Beauty-Salons-For-Men-In-Panchkula.jpg'},
    ]


  return (
    <Grid>
        <SalonDataDisplay dataTODisplay={nearbyHaircutData}/>
    </Grid>

  )
}

export default NearByHaircuts
