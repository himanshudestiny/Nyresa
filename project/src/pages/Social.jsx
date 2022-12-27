import React, { useEffect, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/social/social.actions";
import { login } from "../redux/auth/auth.actions";
import Footer from "../components/Footer";

const initState = {
  initials: "",
  title: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  repassword: "",
};

const Social = () => {
  const { error } = useSelector((store) => store.authManager);
  const navigate = useNavigate();

  const [registerformData, setRegisterFormData] = useState(initState);
  const [registerformErrors, setRegisterFormErrors] = useState({});

  const [loginformData, setLoginFormData] = useState([]);
  const [loginformErrors, setLoginFormErrors] = useState({});

  const dispatch = useDispatch();

  const { isAuth } = useSelector((store) => store.authManager.data);
  const toast = useToast();

  useEffect(() => {
    if (isAuth) {
      toast({
        title: "Login Successful!",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      navigate("/");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, navigate]);

  const validateRegister = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    }
    if (!values.repassword) {
      errors.repassword = "Confirm Password is required!";
    } else if (values.repassword.length < 4) {
      errors.repassword = "Password must be more than 4 characters";
    } else if (values.repassword.length > 10) {
      errors.repassword = "Password cannot exceed 10 characters";
    }
    return errors;
  };

  const handleRegisterChange = (e) => {
    const { value, name } = e.target;
    setRegisterFormData({ ...registerformData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const registerformErrors = validateRegister(registerformData);
    setRegisterFormErrors(registerformErrors);

    if (Object.keys(registerformErrors).length === 0) {
      dispatch(addUser(registerformData));
      toast({
        title: "Registration Successful!",
        description: "You can Login now.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const validateLogin = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    }
    return errors;
  };

  const handleLoginChange = (e) => {
    const { value, name } = e.target;
    setLoginFormData({ ...loginformData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const loginformErrors = validateLogin(loginformData);
    setLoginFormErrors(loginformErrors);

    if (Object.keys(loginformErrors).length === 0) {
      dispatch(login(loginformData));
    }
  };

  if (error) {
    toast({
      title: "Wrong Credentials!",
      description: "Try again.",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  const { title, firstname, lastname, email, password, repassword } =
    registerformData;

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
              <form onSubmit={handleRegisterSubmit}>
                <FormControl mt="20px">
                  <RadioGroup defaultValue="Ms." mb={4} name="initials">
                    <HStack spacing="24px">
                      <Radio value="Ms" onChange={handleRegisterChange}>
                        Ms.
                      </Radio>
                      <Radio value="Mss" onChange={handleRegisterChange}>
                        Mrs.
                      </Radio>
                      <Radio value="Mr" onChange={handleRegisterChange}>
                        Mr.
                      </Radio>
                    </HStack>
                  </RadioGroup>

                  <Select
                    placeholder="Select Academic Title"
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    mb={4}
                    name="title"
                    value={title}
                    onChange={handleRegisterChange}
                  >
                    <option value="Dr">Dr.</option>
                    <option value="Prof">Prof.</option>
                  </Select>

                  <Text color="tomato">{registerformErrors.firstname}</Text>
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="text"
                    placeholder="First Name *"
                    name="firstname"
                    value={firstname}
                    onChange={handleRegisterChange}
                    mb={4}
                  />

                  <Text color="tomato">{registerformErrors.lastname}</Text>
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="text"
                    placeholder="Last name *"
                    name="lastname"
                    value={lastname}
                    onChange={handleRegisterChange}
                    mb={4}
                  />

                  <Text color="tomato">{registerformErrors.email}</Text>
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="email"
                    placeholder="Email address *"
                    name="email"
                    value={email}
                    onChange={handleRegisterChange}
                    mb={4}
                  />

                  <Text color="tomato">{registerformErrors.password}</Text>
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="password"
                    placeholder="Password *"
                    name="password"
                    value={password}
                    onChange={handleRegisterChange}
                    mb={4}
                  />

                  <Text color="tomato">{registerformErrors.repassword}</Text>
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="password"
                    placeholder="Confirm Password *"
                    name="repassword"
                    value={repassword}
                    onChange={handleRegisterChange}
                    mb={4}
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
              <form onSubmit={handleLoginSubmit}>
                <FormControl mt="40px">
                  <Text color="tomato">{loginformErrors.email}</Text>
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={loginformData.email}
                    mb={4}
                    onChange={handleLoginChange}
                  />

                  <Text color="tomato">{loginformErrors.password}</Text>
                  <Input
                    borderColor="blackAlpha.500"
                    borderRadius={0}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginformData.password}
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
      <Footer />
    </>
  );
};

export default Social;
