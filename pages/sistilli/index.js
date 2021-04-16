import React, { useState } from 'react';
import { Button, Heading, VStack } from '@chakra-ui/react';
import Counter from './Counter';
import TodoList from './TodoList';

export default function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <VStack spacing="30px" w="100%" mt="50">
      <VStack boxShadow="base" spacing="40" p="20">
        <Heading fontSize="100px">Our App</Heading>

        <Button
          p="20"
          fontSize="4xl"
          borderRadius="2xl"
          boxShadow="base"
          onClick={() => setShowCounter(!showCounter)}
        >
          {showCounter ? 'Hide Counter' : 'Show Counter'}
        </Button>
        {showCounter && <Counter />}
      </VStack>
      <TodoList />
    </VStack>
  );
}
