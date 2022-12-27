import React from "react";

import Logo from "./Logo.png";

import { Grid, GridItem } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <img
        src={Logo}
        alt="Logo"
        style={{
          margin: "auto",
          width: "400px",
          height: "300px",
          marginBottom: "50px",
        }}
      />

      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={5}
        opacity={{
          base: "0%",
          sm: "0%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        }}
        m="auto"
        mt={["-100px"]}
        w="80%"
      >
        <GridItem w="100%" h="10">
          <h1>SHOPPING BAG</h1>
        </GridItem>
        <GridItem w="100%" h="10">
          <h1>SIGN IN</h1>
        </GridItem>
        <GridItem w="100%" h="10">
          <h1>DELIVERY</h1>
        </GridItem>
        <GridItem w="100%" h="10">
          <h1
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
            PAYMENT
          </h1>
        </GridItem>
        <GridItem w="100%" h="10">
          <h1>CONFIRM</h1>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Header;
