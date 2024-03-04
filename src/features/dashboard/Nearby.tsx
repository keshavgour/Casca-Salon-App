import React, { useState } from "react";
import { Grid } from "@mui/material";
// import ButtonComponent from "components/ButtonComponent";
import AllData from "features/display/AllData";
import NearByHaircuts from "features/display/NearbyHaircuts";
import NearByMakeup from "features/display/NearbyMakeup";
import NearByManicure from "features/display/NearbyManicure";
import NearByMassage from "features/display/NearbyMassage";
import ChipTabHeader from "components/TabHeader";
import ChipTab from "components/ChipTab";

interface iprops {
  typographyData: string;
}

export const Nearby: React.FC<iprops> = ({ typographyData }) => {
  // const [selectedTab, setSelectedTab] = useState("all");
  const [selectChip, setselectChip] = useState("All");
  const chipLabels = ["All", "Haircuts", "Make up", "Manicure", "Massage"];
  const handleChipClick = (chipName: string) => {
    setselectChip(chipName);
  };

  return (
    <>
      <ChipTabHeader
        isPage={false}
        heading={typographyData}
        linktext="See All"
        backward=""
        forward=""
      />

      {/* <Grid item>
          <Grid container>
            <Grid item pr={34}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {typographyData}
              </Typography>
            </Grid>
            <Grid item pl={40} sx={{ fontSize: "20px" }}>
              <Link to="/nearbyLocation" style={{ color: "#ff9800", textDecoration: "none" }}>
                See All
              </Link>
            </Grid>
          </Grid> */}

      <Grid container justifyContent="space-evenly">
        {chipLabels.map((chiplabel, index) => {
          return (
            <Grid item key={index}>
              <ChipTab
                chipLabel={chiplabel}
                selectedChip={selectChip}
                clickFunction={() => handleChipClick(chiplabel)}
              />
            </Grid>
          );
        })}
        {/* <Grid item>
          <ButtonComponent
            label="All"
            selected={selectedTab === "all"}
            onClick={() => handleTabClick("all")}
          />
        </Grid>
        <Grid item>
          <ButtonComponent
            label="Haircuts"
            selected={selectedTab === "haircuts"}
            onClick={() => handleTabClick("haircuts")}
          />
        </Grid>
        <Grid item>
          <ButtonComponent
            label="Make up"
            selected={selectedTab === "makeup"}
            onClick={() => handleTabClick("makeup")}
          />
        </Grid>
        <Grid item>
          <ButtonComponent
            label="Manicure"
            selected={selectedTab === "manicure"}
            onClick={() => handleTabClick("manicure")}
          />
        </Grid>
        <Grid item>
          <ButtonComponent
            label="Massage"
            selected={selectedTab === "massage"}
            onClick={() => handleTabClick("massage")}
          />
        </Grid> */}
      </Grid>

      <Grid item>
        {selectChip === "All" && <AllData />}
        {selectChip === "Haircuts" && <NearByHaircuts />}
        {selectChip === "Make up" && <NearByMakeup />}
        {selectChip === "Manicure" && <NearByManicure />}
        {selectChip === "Massage" && <NearByMassage />}
      </Grid>
    </>
  );
};
