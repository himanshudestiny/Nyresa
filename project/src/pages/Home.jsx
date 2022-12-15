import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import data from "../assets/data/products.json";

const Home = () => {
  console.log(data);
  return (
    <Box>
      <div
        style={{
          position: "absolute",
          width: "100%",
          right: "0",
          height: "0.7px",
          backgroundColor: "rgba(151, 151, 151, 0.534)",
        }}
      ></div>
      <br />
      <Flex
        m="auto"
        mt="10%"
        cursor={"pointer"}
        alignItems={"center"}
        position="relative"
        width={["95%", "95%", "80%"]}
      >
        <Box
          position={"absolute"}
          lineHeight={"7vw"}
          m="auto"
          display={"flex"}
          justifyContent="center"
          textAlign={"center"}
          w="100%"
        >
          <Box w="50%">
            <Link to="/">
              <Heading
                fontWeight={400}
                fontSize={["xl", "6xl"]}
                alignItems="center"
                color="#f2f2f2"
              >
                Women
              </Heading>
            </Link>
          </Box>

          <Box w="50%" display={"flex"} justifyContent="center">
            <Link to="/">
              <Heading
                fontWeight={400}
                fontSize={["xl", "6xl"]}
                alignItems="center"
                color="#f2f2f2"
              >
                Men
              </Heading>
            </Link>
          </Box>
        </Box>
        <Image
          w="100%"
          h="100%"
          zIndex={-1}
          src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1"
        />
      </Flex>
      <Link to="/">
        <Flex
          m="auto"
          mt="3%"
          w={["95%", "95%", "80%"]}
          cursor={"pointer"}
          alignItems={"center"}
          position="relative"
        >
          <Box
            position={"absolute"}
            lineHeight={"7vw"}
            m="auto"
            textAlign={"center"}
            w="100%"
          >
            <Heading
              fontWeight={400}
              fontSize={["xl", "6xl"]}
              alignItems="center"
              color="#f2f2f2"
            >
              Kids
            </Heading>
          </Box>
          <Image
            w="100%"
            h="100%"
            zIndex={-33}
            src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1"
          />
        </Flex>
      </Link>
      <Link to="/">
        <Flex
          m="auto"
          mt="3%"
          w={["95%", "95%", "80%"]}
          cursor={"pointer"}
          alignItems={"center"}
          position="relative"
        >
          <Box
            position={"absolute"}
            lineHeight={"7vw"}
            m="auto"
            textAlign={"center"}
            w="100%"
          >
            <Heading
              fontWeight={400}
              fontSize={["xl", "6xl"]}
              alignItems="center"
              color="#f2f2f2"
            >
              Life
            </Heading>
          </Box>
          <Image
            w="100%"
            h="100%"
            zIndex={-33}
            src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1"
          />
        </Flex>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Carousel link={"/"} title="Men's Collection" data={data.Mens} />
      <br />
      <br />
      <br />
      <br />
      <Carousel link={"/"} title="Women's Collection" data={data.Womens} />
      <br />
      <br />
      <br />
      <br />
      <Carousel link={"/"} title="Kid's Collection" data={data.Kids} />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Home;
