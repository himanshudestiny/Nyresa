import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import data from "../assets/data/products.json";
import Footer from "../components/Footer";

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
            <Link to="/womenproduct">
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
            <Link to="/menproduct">
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
          zIndex={-2}
          src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1"
        />
      </Flex>
      <Link to="/kidproduct">
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
      <Carousel
        link={"/menproduct"}
        title="Men's New Arrivals"
        data={data.Mens}
      />
      <br />
      <br />
      <br />
      <br />
      <Carousel
        link={"/womenproduct"}
        title="Women's New Arrivals"
        data={data.Womens}
      />
      <br />
      <br />
      <br />
      <br />
      <Carousel
        link={"/kidproduct"}
        title="Kid's New Arrivals"
        data={data.Kids}
      />
      <br />
      <br />
      <br />
      <br />
      <Carousel link={"/"} title="Life New Arrivals" data={data.Life} />
      <br />
      <br />
      <br />
      <br />
      <hr
        style={{ border: "1px solid #dee0e3", width: "95%", margin: "auto" }}
      />
      <br />
      <br />
      <br />
      <hr
        style={{ border: "1px solid #dee0e3", width: "95%", margin: "auto" }}
      />{" "}
      <Box mt={"20px"}>
        <Heading
          fontSize={{ base: "15px", md: "19px", lg: "25px" }}
          fontFamily="Century Gothic"
          letterSpacing={"0.8px"}
          fontWeight="400"
          mt={"50px"}
        >
          MYTHERESA – LUXURY FASHION AND DESIGNER SHOPPING
        </Heading>
        <Box
          textAlign={"left"}
          padding={{
            base: "20px 40px 20px 40px",
            sm: "20px 50px 20px 50px",
            md: "20px 80px 20px 80px",
            lg: "20px 100px 20px 100px",
            xl: "20px 120px 20px 120px",
          }}
        >
          <Text
            fontSize={{ base: "11px", md: "15px", lg: "19px" }}
            letterSpacing="1px"
            fontWeight={400}
          >
            Mytheresa is an online shopping destination for children's, men's,
            and women’s luxury fashion and lifestyle design. Our edit makes it
            possible for you to choose from the finest selection of the world’s
            most sought-after designer brands such as Bottega Veneta, Givenchy,
            and Burberry. We pride ourselves on creating an easy-to-navigate
            online shopping platform while maintaining an elevated boutique-like
            feel.
            <br />
            <br />
            Our expert team of buyers scour the globe each season to bring you
            the most exquisite selection of fashion straight from the runways of
            New York, London, Paris and Milan. With our daily New Arrivals, we
            make it effortless for you to have the most coveted items first.
            Whether you’re looking to invest in timeless pieces from Gucci,
            Balenciaga, Christian Louboutin and Saint Laurent, or you want to
            set trends in Off-White, Acne Studios and Alanui, Mytheresa is the
            go-to fashion and designer website that can fulfill all your
            sartorial wishes. In our Life store, you'll find a range of
            established and emerging designers in home, lifestyle, and more,
            like Tom Dixon, Vitra and La DoubleJ. Our unique assortment of
            menswear, womenswear, kidswear and lifestyle design now makes it
            possible to shop for your loved ones – even your pets – all in one
            place.
            <br />
            <br />
            Mytheresa has a long and rich fashion heritage that spans more than
            30 years. What began in the heart of Munich as a contained local
            boutique offering creations from international designers has now
            grown to become one of the most innovative luxury e-commerce
            companies in the world. Whether you’re paying a visit to our
            Mytheresa Store, browsing from your computer at home, or shopping
            on-the-go via our mobile app, our goal always remains the same: to
            provide the perfect space that caters to all your shopping desires.
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "11px", md: "15px", lg: "19px" }}
            mt={"15px"}
          >
            <Link to={"/womenproduct"}>
              <u>Mytheresa Women</u>
            </Link>
            <span>&nbsp;</span> |<span>&nbsp;</span>
            <Link to="/menproduct">
              <u>Mytheresa Men</u>
            </Link>
            <span>&nbsp;</span>|<span>&nbsp;</span>
            <Link to="/kidproduct">
              <u>Mytheresa Kids</u>
            </Link>
            <span>&nbsp;</span>|<span>&nbsp;</span>
            <Link>
              <u>Mytheresa Life</u>
            </Link>
          </Text>
        </Box>
        <hr
          style={{ border: "1px solid #dee0e3", width: "95%", margin: "auto" }}
        />
      </Box>
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default Home;
