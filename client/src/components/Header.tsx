import React from "react";
import Navbar from './Navbar'
import NavbarAside from './NavbarAside'
import { Box, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box>
      <NavbarAside/>
      <Navbar/>
      <Box position="relative" left="37.9%" h="350px" w="62.1%">
        <Image src="/image-header.jpg" alt="header-image" w="100%" h="350px"/>
      </Box>
    </Box>
  )
};

export default Header;
