import React, { useEffect, useState } from "react";
import SalonDataDisplay from "./SalonDataDisplay";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import BackButtonComponent from "components/BackButtonComponent";
import { useNavigate } from "react-router-dom";
import { bookmarkService } from "Services/bookmarkService";

export const Bookmark = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await bookmarkService();
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching bookmark data:", error);
      }
    };

    fetchData();
  }, [data]);

  const clickBack = () => {
    return navigate("/dashboard");
  };
  return (
    <Container>
      <Grid container direction={"column"} spacing={4} alignItems={"center"}>
        <Grid item>
          <Grid container>
            <Grid item>
              <BackButtonComponent onClick={clickBack} />
            </Grid>
            <Grid item pt={0.4} pl={1}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                My Bookmark
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <SalonDataDisplay dataTODisplay={data} />
        </Grid>
      </Grid>
    </Container>
  );
};
