import React, { useState } from "react";
import { Grid } from "@mui/material";
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
      <ChipTabHeader isPage={false} heading={typographyData} linktext="See All" backward="" forward="" />
      <Grid container justifyContent="space-evenly" marginY={1}>
        {chipLabels.map((chiplabel, index) => {
          return (
            <Grid item key={index}>
              <ChipTab chipLabel={chiplabel} selectedChip={selectChip} clickFunction={() => handleChipClick(chiplabel)} />
            </Grid>
          );
        })}
      </Grid>
      {selectChip === "All" && <AllData />}
      {selectChip === "Haircuts" && <NearByHaircuts />}
      {selectChip === "Make up" && <NearByMakeup />}
      {selectChip === "Manicure" && <NearByManicure />}
      {selectChip === "Massage" && <NearByMassage />}
    </>
  );
};
