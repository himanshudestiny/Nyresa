import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import "./Navbar.css";
import axios from "axios";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [mytext, setMytext] = useState(true);
  let [cart, setCart] = useState([]);

  let mn = setInterval(() => {
    setMytext(!mytext);

    clearInterval(mn);
  }, 5000);

  let abc = () => (
    <Box>
      {mytext
        ? "FREE SHIPPING on orders over $800"
        : "FREE RETURNS within 30 days"}
    </Box>
  );

  const getCart = async () => {
    axios
      .get(`http://localhost:8080/productlist`)
      .then((res) => setCart(res.data));
  };

  useEffect(() => {
    abc();
  }, [mytext]);
  useEffect(() => {
    console.log(getCart());
  }, []);
  // console.log(cart);
  // let parent = document.querySelector(".stickyNav").parentElement;

  // while (parent) {
  //   const hasOverflow = getComputedStyle(parent).overflow;
  //   if (hasOverflow !== "visible") {
  //     console.log(hasOverflow, parent);
  //   }
  //   parent = parent.parentElement;
  // }
  return (
    <Box>
      <Box mb={7} paddingBottom="1rem">
        <Flex
          className="NavOne"
          display={{ lg: "flex", md: "flex", sm: "none" }}
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
            <Link to="/">
              <Text cursor="pointer">Signup For Newsletter</Text>
            </Link>
            <Link to="/login">
              <Text cursor="pointer">My account</Text>
            </Link>

            <Link id="heart" to="/wishlist" style={{ display: "flex" }}>
              <Text cursor="pointer">My wishlist </Text>
              <Box mt={{ base: "1px", md: "2px", lg: "4px" }} pl="3px">
                <AiOutlineHeart />
              </Box>
            </Link>
            <Link to="/">
              <Text cursor="pointer">India | English</Text>
            </Link>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Box
            zIndex="200"
            display={{
              lg: "none",
              md: "none",
              sm: "inline-block",
            }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                size={"md"}
                variant="ghost"
                colorScheme="none"
                aria-label="Account"
                _hover={{ bg: "none" }}
                icon={
                  isOpen ? (
                    <CloseIcon color={"#111"} fontSize={"md"} />
                  ) : (
                    <HamburgerIcon color={"#111"} fontSize={"2xl"} />
                  )
                }
                display={{ lg: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <MenuList>
                <MenuItem _hover={{ bg: "#f3f3f3" }} transition="1s">
                  <Link to="/womenproduct">
                    <Text letterSpacing={1} cursor="pointer">
                      Women
                    </Text>
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "#f3f3f3" }} transition="1s">
                  <Link to="/menproduct">
                    <Text letterSpacing={1} cursor="pointer">
                      Men
                    </Text>
                  </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "#f3f3f3" }} transition="1s">
                  <Link to="/kidproduct">
                    <Text letterSpacing={1} cursor="pointer">
                      Kids
                    </Text>
                  </Link>
                </MenuItem>

                <MenuDivider />
                <MenuItem _hover={{ bg: "#f3f3f3" }} transition="1s">
                  <Link to="/login">
                    <Text letterSpacing={1} cursor="pointer">
                      My Account
                    </Text>
                  </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem _hover={{ bg: "#f3f3f3" }} transition="1s">
                  <Link to="/">
                    <Text letterSpacing={1} cursor="pointer">
                      My Wishlist
                    </Text>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          {/* ================================================================ */}

          <Box
            w={{ base: "30%", lg: "38%", xl: "50%" }}
            p="20px 0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border={"0px solid red"}
            margin={{ base: "auto auto auto auto", md: "auto" }}
          >
            <Link to={"/"}>
              <Image src="https://i.ibb.co/gjhDhWZ/Logo.png" />
            </Link>
          </Box>

          <Link id="cart" to="/">
            <Flex alignItems="center" cursor="pointer" pr={"15px"}>
              <Text
                display={["none", "inline-block", "inline-block"]}
                fontWeight="600"
                fontSize={{ base: "12px", lg: "14px", xl: "20px" }}
                mt="6px"
              >
                SHOPPING BAG
              </Text>

              <Box
                position={"relative"}
                textAlign="center"
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
              >
                <Image
                  h="25px"
                  w="25px"
                  mr={2}
                  ml={2}
                  src="https://img.icons8.com/ios/2x/shopping-bag--v3.png"
                />
                <Text
                  mt="25%"
                  fontSize="xs"
                  position={"absolute"}
                  color="black"
                  mr={2}
                  fontWeight="400"
                  ml={2}
                >
                  {cart.length}
                </Text>
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Box>
      <Box
        className="stickyNav"
        padding={{
          base: "0px 10px 15px 0px",
          sm: "0px 80px 15px 0px",
          lg: "3px 100px 15px 0px",
          xl: "3px 180px 15px 0px",
        }}
        fontSize={{ base: "10px", md: "12px", lg: "14px", xl: "18px" }}
      >
        {abc()}
      </Box>
    </Box>
  );
}
