import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react"
import Logo from './logo'

const NavbarAside = () => {
  return (
    <Box bg='#1E0E5C' w='38%' h='350px' position='absolute' zIndex={3} ps='20px' pt='5px'>
      <Logo/>
      <Box px='18px' my='40px'>
        <Heading as='h4' size='lg' color='#fff' mb='22px'>Ensemble, concrétisons <Box as='span' color='#778FE4'>tous vos projet.</Box></Heading>
        <Text as='p' color='#fff' fontSize='14px' mb='22px'>
          Parce que nous connaissons et que nous valorisant l’importance d’un foyer et d’une famille; My Immo s’engage auprès de vous, pour que vous puissez trouvez un endroit où vous pouvez vous sentir chez vous.
        </Text>
        <Button bg='#356CBF' color='#fff' px='20px' py='25px' fontSize='20px' mb='22px'>Travaillons ensemble</Button>
      </Box>
    </Box>
  )
};

export default NavbarAside;
