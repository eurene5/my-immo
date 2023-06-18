import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"

const Main = () => {
  return (
    <Box my="100px" mx="50px">
        <Box className="contactPro" display='flex' w="100%">
            <Box w='50%' py='75px'>
                <Box w='90%'>
                    <Heading as='h3'>
                        Une Equipe de professionnel <br /><Box as='span' color="#1E0E5C">à votre écoute.</Box>
                    </Heading>
                    <Text my='30px'>
                        Le choix d'un habitacle ne pourra jamais être pris à la légère, c'est pourquoi chez My Immo, nous travaillerons avec des professionnes de l'immobilier en qui vous pouvez avoir confiance.
                    </Text>
                    <Button
                        bg='#1E0E5C'
                        color='white'
                        fontWeight='bold'
                        fontSize="20px"
                        w='400px'
                        h='70px'
                    >
                        Contacter un professionnel
                    </Button>
                </Box>
            </Box>
            <Box w='50%' flex='display' flexDirection='column-reverse'>
                <Box mb='11px'>
                    <Image ms='auto' src='/contactPro1.jpg'/>
                </Box>
                <Box display='flex' flexDirection='row-reverse'>
                    <Box ms='11px'>
                        <Image src='/contactPro3.jpg'/>
                    </Box>
                    <Box>
                        <Image src='/contactPro2.jpg'/>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
        {/* <Box className="aboutUs" display='flex' flexDirection='row' mt='100px'>
            <Box w='35%'>
                <Box display='flex' flexDirection='row' mb='20px'>
                    <Box transform='rotate(-90deg)' h='fit-content' w='230px' my='auto' ms='-60px'>
                        <Text fontWeight='bold' color='#356CBF' w='230px' textAlign='center'>Nos conseils <Box as='span' color='black'>pour</Box> vos envies</Text>
                    </Box>
                    <Image w='350px' h='350px' src='/about1.jpg' ms='-90px'/>
                </Box>
                <Box display='flex' flexDirection='row'>
                    <Box transform='rotate(-90deg)' h='fit-content' w='300px' my='auto' ms='-95px'>
                        <Text fontWeight='bold' color='#356CBF' w='300px' textAlign='center'><Box as='span' color='black'>L'immobilier</Box> sur-mesure, personnalisé</Text>
                    </Box>
                    <Image w='350px' h='350px' src='/about3.jpg' ms='-125px'/>
                </Box>
            </Box>
            <Box w='65%'>
                <Box mb=''>
                    <Box mt='-37px' mb='13px'>
                        <Text mx='auto' textAlign='center' fontWeight='bold'>Notre conscience au service de <Box as='span' color='#356CBF'>votre confiance</Box></Text>
                    </Box>
                    <Image src="/about2.jpg" h='350px'/>
                </Box>
                <Box>
                    <Image src="/about2.jpg" h='350px'/>
                </Box>
            </Box>
        </Box> */}

        <Box
            className="aboutUs"
            mt='100px'
            display='flex'
            position='relative'
            ms='20px'
        >
            <Box
                fontWeight='bold'
                position='absolute'
                w='720px'
                mt='685px'
                ms='30px'
                display='flex'
                justifyContent='space-around'
                transformOrigin='left'
                transform='rotate(-90deg)'
            >
                <Text color='#356CBF'>Nos conseils <Box as='span' color='black'>pour</Box> vos envies</Text>
                <Text color='#356CBF'><Box as='span' color='black'>L'immobilier</Box> sur-mesure, personnalisé</Text>
            </Box>
            <Box position='absolute' right='250px' top='-35px'>
                <Text fontWeight='bold'>Notre conscience au service de <Box as='span' color='#356CBF'>votre confiance</Box></Text>
            </Box>
            <Box display='flex' flexWrap='wrap' mx='auto'>
                <Box display='flex' flexDirection='column' me='20px'>
                    <Box mb='20px'>
                        <Image src='/about1.jpg' w='350px' h='350px'/>
                    </Box>
                    <Box>
                        <Image src='/about3.jpg' w='350px' h='350px'/>
                    </Box>
                </Box>
                <Box>
                    <Box mb='20px'>
                        <Image src='/about2.jpg' w='750px' h='350px' />
                    </Box>
                    <Box color='white' display='flex' h='350px' w='750px' >
                        <Box bg='#1E0E5C' px='40px' pt='30px'>
                            <Heading as='h4'>A propos de <Box as='span' color='#778FE4'>nous</Box></Heading>
                            <Text fontSize='14px'>
                                <Box as='span' fontWeight='bold'>My Immo </Box> 
                                est un site web qui a pour but d'aider nos internautes à trouver des biens immobilier tants à louer qu'à acheter. Nous vous proposons des services de qualités et mettons notre conscience au service de votre confiance pour vous accompagner au mieux, lors de votre navigation. <Box as='span' fontWeight='bold'>Le Design</Box> a été pensé pour vous. C'est à dire simple et facile d'utilisation, parce que chez nous, nous privilegions l'expérience utilisateurs au détails insignifiants.
                            </Text>
                            <Text fontSize='14px'>
                                Mais quel genre service proposons-nous? Et comment pouvons-nous concrétiser vos projets? En premier lieu, nous vous proposons une fonctionnalité de recherche avancé qui vous permettra de trouver un bien immoblier à acheter ou à louer en prenant compte de votre budjet, le quartier que vous souhaitez et bien plus encore mais vous pouvez également consulter une Agence immobilier pour vous aider dans votre ...
                            </Text>
                        </Box>
                        <Box bg='#356CBF' w='100px' position='relative' p='0'>
                            <Heading
                                as='h6'
                                fontSize='24px'
                                textAlign='center'
                                transformOrigin='left'
                                transform='rotate(90deg)'
                                w='350px'
                                mt='-15px'
                                ms='50px'
                            >
                                Nous connaître un peu plus
                            </Heading>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
};

export default Main;
