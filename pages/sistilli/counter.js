import { Button } from '@chakra-ui/button';
import { Box, Heading, Text, VStack } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // componentDidMount
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, [count, count2]);

  // componentWillUnmount
  // useEffect(() => {
  //   console.log("The use effect ran");
  //   return () => {
  //     console.log("the return is being ran");
  //   };
  // }, []);

  useEffect(() => {
    console.log(`The count has updated to ${count}`);
    return () => {
      console.log(`we are in the cleanup - the count is ${count}`);
    };
  }, [count]);

  return (
    <VStack w="100%" spacing={20} justify="center" boxShadow="base" p="10">
      <Box p="10">
        <VStack spacing="20">
          <Heading fontWeight="900" color="red.500" fontSize="40px">
            Counter
          </Heading>
          <Text fontSize="5xl" fontWeight="500">
            current count: {count}
          </Text>
          <Button
            fontSize="4xl"
            p={10}
            borderRadius="2xl"
            boxShadow="base"
            onClick={() => setCount(count + 1)}
          >
            increment the count
          </Button>
          <Text fontSize="5xl" fontWeight="500">
            current count: {count2}
          </Text>
          <Button
            fontSize="4xl"
            boxShadow="base"
            p={10}
            borderRadius="2xl"
            onClick={() => setCount(count + 2)}
          >
            increment count 2
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Counter;
