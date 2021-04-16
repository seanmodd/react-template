import { Button } from '@chakra-ui/button';
import { Heading, Text, VStack } from '@chakra-ui/layout';

const MyComponent = ({ name }) => (
  <VStack>
    <Heading>Hello! My name is </Heading>
    <Heading fontSize="100px">{name}</Heading>
  </VStack>
);

export default MyComponent;
