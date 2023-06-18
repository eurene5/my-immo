import NextLink from "next/link";
import {
    Text,
    Container,
    Box,
    Heading,
    Flex,
} from '@chakra-ui/react'
import Logo from "./logo";
import { css } from "@emotion/css";


type Props = {
    href: string;
    children: React.ReactNode;
}

const LinkItem = ({href, children}: Props) => {
    const color = children === 'Se connecter' ? '#1E0E5C': 'inherit'

    return (
        <NextLink href={href}>
            <Box 
                backgroundColor={color} 
                w='212px' 
                h='60px' 
                display='flex' 
                className={css([{
                    '&:hover': {background: '#d9d9d980'},
                    transition: 'background 1s easeInOut',
                }])}
            >
                <Text
                    color={'#fff'}
                    m='auto'
                    fontWeight='bold'
                    fontSize='lg'
                >
                    {children}
                </Text>
            </Box>
        </NextLink>
    )
}

const Navbar = () => {
  return (
    <Box
        position='fixed'
        zIndex={2}
        bg='#d9d9d96b'
        display='flex'
        justifyContent='space-between'
        w='100%'
    >
        <NextLink href='/' className={css([{
            margin: 'auto 15px',
        }])}>
            <Heading as='h1' size='lg'>
                <Logo/>
            </Heading>
        </NextLink>
        <Container
            pr={0}
            pb={0}
            mr={0}
        >
            <Flex 
                direction='row'
                width='auto'
                alignItems='center'
                justify='end'
                h='100%'
                rowGap='none'
                p={0}
            >
                <LinkItem href='/'>
                    Accueil
                </LinkItem>
                <LinkItem href='/Agences'>
                    Agences
                </LinkItem>
                <LinkItem href='/BienImmobilier'>
                    Bien Immobilier
                </LinkItem>
                <LinkItem href='Se connecter'>
                    Se connecter
                </LinkItem>
            </Flex>
        </Container>


    </Box>
  )
};

export default Navbar;
