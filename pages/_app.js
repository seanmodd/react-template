import { ChakraProvider, ColorModeProvider, Flex } from '@chakra-ui/react';
import '../styles/globals.css';
import { GoogleFonts } from 'next-google-fonts';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Flex w="100vw" h="100vh">
          <Component {...pageProps} />
        </Flex>
      </ColorModeProvider>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
    </ChakraProvider>
  );
}

export default MyApp;
