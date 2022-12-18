import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/auth.actions";

export default function Navbar() {
  const { isAuth } = useSelector((store) => store.authManager.data);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (isAuth) {
      dispatch(logout());
      alert("Logged out successfully! Redirecting back to Login Page");
    }
  };

  return (
    <Box>
      <Box mb={7} paddingBottom="1rem">
        <Flex
          className="NavOne"
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
            <Link to="/womenproduct">
              <Text className="categ" cursor="pointer">
                WOMEN
              </Text>
            </Link>
            <Link to="/menproduct">
              <Text className="categ" cursor="pointer">
                MEN
              </Text>
            </Link>
            <Link to="/kidproduct">
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
            <Link to="/login" onClick={handleLogout}>
              <Text cursor="pointer">{isAuth ? "Logout" : "My account"}</Text>
            </Link>

            <Link to="/wishlist" style={{ display: "flex" }}>
              <Text cursor="pointer">My wishlist </Text>
              <Box id="heart" mt={"4px"} pl="3px">
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
