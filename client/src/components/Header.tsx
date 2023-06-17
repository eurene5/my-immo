import React from "react";
import Navbar from './Navbar'
import NavbarAside from './NavbarAside'
import { Box, Image } from "@chakra-ui/react";

const Header = () => {
  return <Box>
    <NavbarAside/>
    <Navbar/>
    <Box boxSize='sm'>
      <Image src='/image-header.jpg' w='100%' h='350px' alt='header-image' />
    </Box>
  </Box>;
};

export default Header;
