import React, { ChangeEvent, useEffect, useState } from "react";
import InputComponent from "components/InputComponent";
import SalonDataDisplay from "./display/SalonDataDisplay";
import { Grid } from "@mui/material";
import { searchService } from "Services/searchService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await searchService(query);
        console.log(response.data);
        setResults(response.data);
      } catch (error) {
        console.log(error);
        setError(String(error));
      }
    };

    if (query.trim() !== "") {
      fetchSearchResults();
    } else {
      setResults([]);
      setError("");
    }
  }, [query]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Grid container direction={"column"}>
      <Grid item>
        <InputComponent type="search" placeholder="Search" value={query} onChange={handleChange} />
      </Grid>
      <Grid item pl={13}>
        {error && <h3>{error}</h3>}
      </Grid>
      <Grid item pt={3}>
        <SalonDataDisplay dataTODisplay={results} />
      </Grid>
    </Grid>
  );
};

export default Search;
