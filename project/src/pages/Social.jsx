import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  Input,
  Text,
  Grid,
  GridItem,
  Checkbox,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Social = () => {
  const [formData, setFormData] = useState(initState);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegisterChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { firstname, lastname, email, password } = formData;

  return (
    <>
      <Container maxW={{ base: "70%", md: "70%" }} my="20">
        <Grid
          gap={6}
          templateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
          }}
        >
          {/* Left Side */}
          <GridItem
            textAlign="left"
            borderRight={{ base: "none", lg: "1px solid black" }}
            pr={{ base: "0", md: "16" }}
            pb={{ base: "8", lg: "none" }}
            margin={{ base: "auto", md: "auto" }}
            borderBottom={{ base: "1px solid black", lg: "none" }}
          >
            <Box>
              <Text fontSize="20px" pb={4}>
                CREATE AN ACCOUNT
              </Text>
              <Text display="inline">
                Please enter the following information to create your account.
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl mt="20px">
                  <RadioGroup defaultValue="Ms." mb={4}>
                    <HStack spacing="24px">
                      <Radio value="Ms">Ms.</Radio>
                      <Radio value="Mr">Mrs.</Radio>
                      <Radio value="Mss">Mr.</Radio>
                    </HStack>
                  </RadioGroup>

                  <Select
                    placeholder="Select Academic Title"
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    mb={4}
                  >
                    <option>Dr.</option>
                    <option>Prof.</option>
                  </Select>

                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="text"
                    placeholder="First Name *"
                    name="firstname"
                    value={firstname}
                    onChange={handleRegisterChange}
                    mb={4}
                    isRequired
                  />

                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="text"
                    placeholder="Last name *"
                    name="lastname"
                    value={lastname}
                    onChange={handleRegisterChange}
                    mb={4}
                    isRequired
                  />

                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="email"
                    placeholder="Email address *"
                    name="email"
                    value={email}
                    onChange={handleRegisterChange}
                    mb={4}
                    isRequired
                  />

                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="password"
                    placeholder="Password *"
                    name="password"
                    value={password}
                    onChange={handleRegisterChange}
                    mb={4}
                    isRequired
                  />

                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="password"
                    placeholder="Confirm Password *"
                    name="password"
                    value={password}
                    onChange={handleRegisterChange}
                    mb={4}
                    isRequired
                  />

                  <Text pt="30px" w="100%" margin="auto" fontSize="14px">
                    <Checkbox defaultChecked size="md" pt={1} /> From now on I
                    will receive the Mytheresa Newsletter with selected fashion
                    offers. If I do not wish to receive the newsletter, I can
                    unsubscribe at any time free of charge at
                    privacy@mytheresa.com.
                    <br />
                    <br />I agree that Mytheresa may insert analytical web
                    beacons into the newsletter and create a personalized user
                    profile based on my purchase and usage behavior, including
                    sending a notification when I have placed something in the
                    shopping cart. Further details can be found in our Privacy
                    Policy, clause 5. I understand that I can revoke my consent
                    at any time by emailing privacy@mytheresa.com.
                  </Text>

                  <Text mt={8}>*required fields</Text>
                  <Input
                    width={{ base: "60%", sm: "45%", md: "60%" }}
                    mt="30px"
                    color="white"
                    backgroundColor="black"
                    borderRadius={0}
                    type="submit"
                    value="REGISTER"
                    _hover={{
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid black",
                      cursor: "pointer",
                    }}
                  />
                </FormControl>
              </form>
            </Box>
          </GridItem>

          {/* Right Side */}
          <GridItem
            textAlign="left"
            margin={{ base: "auto", md: "auto" }}
            marginTop={{ base: "12px", lg: "0" }}
            paddingTop={{ base: "20px", lg: "0" }}
            marginLeft={{ md: "0" }}
            paddingLeft={{ lg: "6" }}
          >
            <Box>
              <Text Text fontSize="20px" pb={4}>
                ALREADY REGISTERED?
              </Text>
              <Text display="inline">
                If you have an account with us, please log in.
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl mt="40px">
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="email"
                    placeholder="Email address"
                    value={email}
                    mb={4}
                    onChange={handleLoginChange}
                  />

                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleLoginChange}
                  />
                  <Text mt={8} mb={2}>
                    *required fields
                  </Text>
                  <Link>Forgot Your Password?</Link>
                  <br />
                  <Input
                    width={{ base: "40%", sm: "45%", md: "60%" }}
                    mt="30px"
                    color="white"
                    backgroundColor="black"
                    borderRadius={0}
                    type="submit"
                    value="LOGIN"
                    _hover={{
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid black",
                      cursor: "pointer",
                    }}
                  />
                </FormControl>
              </form>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Social;
