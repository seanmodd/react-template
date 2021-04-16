import { Button } from '@chakra-ui/button';
import { Heading, Text } from '@chakra-ui/layout';
import Head from 'next/head';
import styled from 'styled-components';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';

const MyHeading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: Poppins;
  color: palevioletred;
`;
const hoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #ff0000',
  transition: 'all .2s ease-out',
  background: '#62ff00',
  color: 'black',
  fontWeight: '400',
};
const pressedStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  textShadow: '6px 6px #ff00ae',
  fontWeight: '400',
};
const MyButton = ({ children }) => (
  <div>
    <Button
      transition="0.5s"
      boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
      bg={mode('gray.700', 'gray.100')}
      color={mode('gray.100', 'gray.700')}
      p="10px"
      m="10px"
      _hover={hoverStyle}
      _active={pressedStyle}
    >
      {children}
    </Button>
  </div>
);
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="main">
        <Heading>Here</Heading>

        <MyHeading>MyHeading</MyHeading>
        <h1 className="title">
          <MyButton>Sample Button</MyButton>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Text fontSize="40px">Sample Text from Chakra UI</Text>
        <Text>Here</Text>
      </main>
    </div>
  );
}
