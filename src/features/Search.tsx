import { Grid } from "@mui/material";
import React from "react";
import InputComponent from "components/InputComponent";

const Search = () => {
  return (
    <Grid>
      <InputComponent type="search" placeholder="Search" />
    </Grid>
  );
};

export default Search;
