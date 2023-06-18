import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Home/Main";
import { Box } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Box>
        <Header/>
        <Main/>
        <Footer/>
    </Box>
  )
};

export default HomePage;
