import React, { useState } from "react";
import {
  AppBar,
} from "@mui/material";

import type { NextPage } from "next";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Home: NextPage = () => {

  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <AppBar className="navbar">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          style={{ padding: "20px 0px" }}
        >
          <Grid item xs={2}>
            <svg
              style={{ marginLeft: "50px", cursor: "pointer" }}
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 1.0166C24.5009 1.0166 27.8583 2.40731 30.3338 4.88279C32.8093 7.35827 34.2 10.7157 34.2 14.2166C34.2 28.8935 39.5538 31.7858 41 31.7858H1C2.47692 31.7858 7.8 28.8628 7.8 14.2166C7.8 10.7157 9.19071 7.35827 11.6662 4.88279C14.1417 2.40731 17.4991 1.0166 21 1.0166Z"
                stroke="#00FF01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.3857 37.416C16.6517 38.4376 17.2491 39.3421 18.0844 39.9878C18.9196 40.6334 19.9454 40.9837 21.0011 40.9837C22.0568 40.9837 23.0826 40.6334 23.9179 39.9878C24.7531 39.3421 25.3505 38.4376 25.6165 37.416"
                stroke="#00FF01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Grid>
          <Grid item xs={5} justifyContent="end">
            <div style={{ display: "flex", justifyContent: "end" }}>
              <FormControl style={{ width: "226px" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ color: "#FFFFFF" }}
                >
                  Polygon
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  style={{ color: "#FFFFFF" }}
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Polygon</MenuItem>
                  <MenuItem value={20}>Ethereum</MenuItem>
                  <MenuItem value={30}>Filecoin</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="outlined"
                style={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  width: "250px",
                }}
              >
                Connect Wallet
                <svg
                  style={{ marginLeft: "15px" }}
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7143 12.8557V9.42718C20.7143 8.97252 20.5337 8.53648 20.2122 8.21499C19.8907 7.8935 19.4547 7.71289 19 7.71289H2.71429C2.25963 7.71289 1.82359 7.8935 1.5021 8.21499C1.18061 8.53648 1 8.97252 1 9.42718V21.4272C1 21.8818 1.18061 22.3179 1.5021 22.6394C1.82359 22.9609 2.25963 23.1415 2.71429 23.1415H19C19.4547 23.1415 19.8907 22.9609 20.2122 22.6394C20.5337 22.3179 20.7143 21.8818 20.7143 21.4272V17.1415"
                    stroke="#00FF01"
                    stroke-width="1.71429"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.72583 3.42702L16.4458 0.889878C16.5551 0.859104 16.6694 0.850779 16.7819 0.865406C16.8944 0.880033 17.0028 0.917309 17.1006 0.974984C17.1983 1.03266 17.2833 1.10954 17.3505 1.20098C17.4177 1.29242 17.4657 1.39653 17.4915 1.50702L17.9715 3.42702"
                    stroke="#00FF01"
                    stroke-width="1.71429"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.4285 12.8555H18.1428C17.6694 12.8555 17.2856 13.2392 17.2856 13.7126V16.284C17.2856 16.7574 17.6694 17.1412 18.1428 17.1412H22.4285C22.9019 17.1412 23.2856 16.7574 23.2856 16.284V13.7126C23.2856 13.2392 22.9019 12.8555 22.4285 12.8555Z"
                    stroke="#00FF01"
                    stroke-width="1.71429"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Home;
