"use client";

import { ChakraProvider, extendTheme, Container, Box } from '@chakra-ui/react'
import HomePage from './pages/HomePage';

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif'
  }
})

export default function Home({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider theme={theme}>
      <Box background-color='d9d9d9'>
        <HomePage/>
      </Box>
      <Container>
        {children}
      </Container>
    </ChakraProvider>
  )
}
