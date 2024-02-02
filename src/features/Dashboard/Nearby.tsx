import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";
import AllData from "../display/AllData";
import NearByHaircuts from "../display/NearbyHaircuts";
import NearByMakeup from "../display/NearbyMakeup";
import NearByManicure from "../display/NearbyManicure";
import NearByMassage from "../display/NearbyMassage";

interface IPROPS {
  typographyData:string
  seeAll:string
}

const Nearby: React.FC<IPROPS> = ({typographyData, seeAll}) => {
  
  const [selectedTab, setSelectedTab] = useState('all');

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  }


  return (
    <Grid container direction={"column"} spacing={3}>
      <Grid item>
        <Grid container >
          <Grid item pr={34}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {typographyData}
            </Typography>
          </Grid>
          <Grid item pl={40} sx={{ color: "#ff9800", fontSize: "20px" }}>
            <Link to='/nearbylocation' style={{ color: "#ff9800", textDecoration: "none" }}>
              {seeAll}
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={12}>
          <Grid item>
            <ButtonComponent 
            label="All"
            selected={selectedTab === 'all'}
            onClick={() => handleTabClick('all')} />
          </Grid>
          <Grid item>
            <ButtonComponent
             label="Haircuts" 
             selected={selectedTab === 'haircuts'}
             onClick={() => handleTabClick('haircuts')}
             />
          </Grid>
          <Grid item>
            <ButtonComponent
             label="Make up" 
             selected={selectedTab === 'makeup'}
             onClick={() => handleTabClick('makeup')}
             />
          </Grid>
          <Grid item>
            <ButtonComponent
             label="Manicure" 
             selected={selectedTab === 'manicure'}
             onClick={() => handleTabClick('manicure')}
             />
          </Grid>
          <Grid item>
            <ButtonComponent
             label="Massage" 
             selected={selectedTab === 'massage'}
             onClick={() => handleTabClick('massage')}
             />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {selectedTab === 'all' && <AllData /> }
        {selectedTab === 'haircuts' && <NearByHaircuts />}
        {selectedTab === 'makeup' && <NearByMakeup />}
        {selectedTab === 'manicure' && <NearByManicure />}
        {selectedTab === 'massage' && <NearByMassage />}
      </Grid>      

    </Grid>
  );
};

export default Nearby;
