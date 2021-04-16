//! Level 7/10 Difficulty!

import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('Callback', this.state.count)
    // })
    // this.state.count = this.state.count + 1
    // console.log(this.state.count)
  }

  incrementFive() {
    console.log('Inside incrementFive');
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <VStack w="100%" align="center" justify="center" spacing="100px">
          <Text fontSize="100px">Count - {this.state.count}</Text>

          <Button
            p="50px"
            fontSize="40px"
            colorScheme="whatsapp"
            onClick={() => this.incrementFive()}
          >
            Increment
          </Button>
        </VStack>
      </>
    );
  }
}

export default Counter;
