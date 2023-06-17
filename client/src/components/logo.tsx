import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react"

const logo = () => {
  return <Box my="2px" ml="20px">
    <Flex flexDirection="row" maxH="46px">
      <Flex flexDirection="column" mr="13px">
        <Box bg="#778fe4" w="6px" h="22px"></Box>
        <Box bg="#fff"  w="6px" h="22px"></Box>
      </Flex>
      <Flex flexDirection="column">
        <Heading as="h4" fontSize="24px" color="white" lineHeight="1.2em">My Immo</Heading>
        <Text fontSize='sm' fontWeight='light' color='white' >Une autre idée de l'immobilier</Text>
      </Flex>
    </Flex>
  </Box>
};

export default logo;
