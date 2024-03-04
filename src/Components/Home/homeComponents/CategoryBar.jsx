import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";

import { BsBox } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function CategoryBar() {
  var data = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title: "Top Offers",
      page: "products/grocery",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles & Tablets",
      page: "/products/mobiles",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
      page: "/products/electronics",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      title: " TVs & Appliances",
      page: "/products/appliances",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title: "Fashion",
      page: "/products/fashion",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty",
      page: "/",
    },
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100",
      title: "Home & Furniture",
      page: "/products/home",
    },
    {
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a1140bead6bfd787.png?q=100",
      title: "FK Originals",
      page: "/products/appliances",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
      title: "Flights & Hotels",
      page: "/",
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
      page: "products/grocery",
    },
  ];
  return (
    <Box bg="white" boxShadow="2xl">
      <Box display={{ base: "none", md: "grid", lg: "grid" }}>
        <Grid
          pb="20px"
          textAlign={"center"}
          templateColumns="repeat(10, 1fr)"
          m="auto"
          gap="20px"
          mt="1rem"
          pl="5px"
          pr="5px"
        >
          {data.map((ele, index) => (
            <NavLink key={Date.now() + index + Math.random()} to={ele.page}>
              <GridItem
                _hover={{ color: "#2874F0" }}
                fontSize={{ base: "0px", md: "12px", lg: "14px" }}
              >
                <Box cursor={"pointer"}>
                  {" "}
                  <Img
                    src={ele.image}
                    alt=""
                    height={{ base: "0px", md: "60px", lg: "70px" }}
                    m="auto"
                  />
                  <Text fontWeight={"600"}> {ele.title}</Text>
                </Box>
              </GridItem>
            </NavLink>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CategoryBar;
