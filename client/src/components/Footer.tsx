import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link"
import React from "react";

type Props = {
    href: string;
    children: React.ReactNode;
}

const LinkItem = ({href, children}: Props) => {

    const borderBottom = LinkItem
    return (
        <NextLink href={href}>
            <Box w='320px' h='40px' borderBottom='solid 0.5px white' display='flex' alignItems='center'>
                <Text color={'#fff'} fontSize='15px'>
                    {children}
                </Text>
            </Box>
        </NextLink>
    )
}

const Footer = () => {
    return (
    <Box 
        position='relative'
        bg='rgba(30, 14, 92, 0.86)' 
        display='flex'
        justifyContent='space-between' 
        color='white'
        py='50px'
        px='100px'
    >
        <Box display='flex' flexDirection='column'>
            <Heading as='h6' fontSize='2xl'>Quelques liens utiles</Heading>
            <Box h='3px' bg='white' w='100px'></Box>
            <LinkItem href='/'>Accueil</LinkItem>
            <LinkItem href='/'>Se connecter</LinkItem>
            <LinkItem href='/'>S'inscrire gratuitement</LinkItem>
            <LinkItem href='/'>Parcourir les Agences</LinkItem>
            <LinkItem href='/'>Trouver un appartement</LinkItem>
        </Box>
        <Box display='flex' flexDirection='column'>
            <Heading as='h6' fontSize='2xl'>Quelques quartiers populaires</Heading>
            <Box h='3px' bg='white' w='100px'></Box>
            <LinkItem href='/'>Ambohipo</LinkItem>
            <LinkItem href='/'>67 Ha</LinkItem>
            <LinkItem href='/'>Ankadifotsy</LinkItem>
            <LinkItem href='/'>Ivandry</LinkItem>
            <LinkItem href='/'>Ankazomanga</LinkItem>
        </Box>
        <Box display='flex' flexDirection='column'>
            <Heading as='h6' fontSize='2xl'>Entrer en contact avec Nous</Heading>
            <Box h='3px' bg='white' w='100px'></Box>
            <LinkItem href='/'><Image src='/icons8-location-50.png' w='15px' h='15px' display='inline'/> ISPM, Antsobolo, Antananarivo, Madagascar</LinkItem>
            <LinkItem href='/'><PhoneIcon/> +261 34 20 390 99</LinkItem>
            <LinkItem href='/'>Code postale: 101</LinkItem>
            <LinkItem href='/'><EmailIcon/> myimmo@immobilier.com</LinkItem>
        </Box>
        <Box position='absolute' bottom='5px' left='0' w='100%'>
            <Text bottom='5px' fontSize='12px' textAlign='center'>&copy;Team Project-X | 2023</Text>
        </Box>
    </Box>
  )
};

export default Footer;
