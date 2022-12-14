import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import "./Navbar.css";

export default function Navbar() {
  return (
    <Box>
      <Box mb={7} paddingBottom="1rem">
        <Flex
          className="Nav1"
          display={{ lg: "flex", md: "none", sm: "none" }}
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          mb={2}
        >
          <Flex
            gap="1.2rem"
            pl={2}
            fontSize={{ base: "10px", lg: "12px", xl: "18px" }}
            display={["none", "flex", "flex"]}
          >
            <Link to="/">
              <Text className="categ" cursor="pointer">
                WOMEN
              </Text>
            </Link>
            <Link to="/">
              <Text className="categ" cursor="pointer">
                MEN
              </Text>
            </Link>
            <Link to="/">
              <Text className="categ" cursor="pointer">
                KIDS
              </Text>
            </Link>
          </Flex>

          <Flex
            gap="3.5rem"
            display={["none", "flex", "flex"]}
            fontSize={{ base: "10px", lg: "12px", xl: "18px" }}
          >
            <Link to="/signup">
              <Text cursor="pointer">Signup For Newsletter</Text>
            </Link>
            <Link to="/login">
              <Text cursor="pointer">My account</Text>
            </Link>

            <Link to="/wishlist" id="heart" style={{ display: "flex" }}>
              <Text cursor="pointer">My wishlist </Text>
              <Box mt={"4px"} pl="3px">
                <AiOutlineHeart />
              </Box>
            </Link>
            <Link to="/">
              <Text cursor="pointer">International | English</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
