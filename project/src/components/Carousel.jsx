import React, { useState } from "react";
import {
  Box,
  IconButton,
  Heading,
  Button,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  arrows: false,

  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Carousel({ data, title, link }) {
  const [slider, setSlider] = useState(null);

  return (
    <Box
      m="auto"
      width={{ base: "100%", sm: "95%", md: "90%", lg: "85%", xl: "80%" }}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Heading
        fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "32px" }}
        fontFamily="Century Gothic"
        letterSpacing="0.8px"
        fontWeight={300}
      >
        {title}
      </Heading>
      <br />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          border: "0px solid black",
          w: "100%",
        }}
        padding="0px 30px 0px 30px"
      >
        <Flex
          paddingBottom={"80px"}
          justifyContent={"center"}
          alignItems="center"
        >
          <IconButton
            aria-label="leftButton"
            border="0px solid blue"
            // mt={{ base: "26%", sm: "22%", md: "20%", lg: "16%", xl: "14%" }}
            bg={"transparent"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
            _hover={{ bg: "none" }}
          >
            <ChevronLeftIcon
              fontSize={{
                base: "2rem",
                sm: "3rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
              }}
              onClick={() => slider?.slickPrev()}
            />
          </IconButton>
        </Flex>
        <Box
          position={"relative"}
          width={"85%"}
          m="auto"
          mt="40px"
          overflow={"hidden"}
          textAlign={"center"}
          border="0px solid red"
        >
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {data.map((ele) => (
              <Link key={ele.id} to="">
                <Box p="1rem" h="55vh">
                  <Box textAlign="center" h="100%" w="100%">
                    <Image w="100%" h="80%" src={ele.images[0]} />
                    <Text color={"#9e9d9d"} p="1rem">
                      {ele.title}
                    </Text>
                    <Text>{ele.subtitle}</Text>
                    <span style={{ fontWeight: 800 }}>
                      $ {ele.discounted_price}
                    </span>
                  </Box>
                </Box>
              </Link>
            ))}
          </Slider>
        </Box>
        <Flex
          paddingBottom={"80px"}
          justifyContent={"center"}
          alignItems="center"
        >
          <IconButton
            aria-label="rightButton"
            border="0px solid blue"
            _hover={{ bg: "none" }}
            bg={"transparent"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <ChevronRightIcon
              color="#111"
              fontSize={{
                base: "2rem",
                sm: "3rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
              }}
            />
          </IconButton>
        </Flex>
      </Box>
      <Box
        m="auto"
        p="2rem"
        w="20%"
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
      >
        <Link to={link}>
          <Button
            color="RGB(255, 255, 255)"
            backgroundColor="RGB(0, 0, 0)"
            mt={"0px"}
            fontWeight={400}
            _hover={{ bg: "gray" }}
            fontSize={{ base: "8px", sm: "10px", md: "12px", lg: "18px" }}
            padding={"16px"}
            fontFamily="Century Gothic"
            letterSpacing={"4px"}
            width="fit-content"
          >
            VIEW ALL
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
