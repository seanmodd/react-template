//! Level 8.5/10 Difficulty!

import { Button } from '@chakra-ui/button';
import { Heading, VStack } from '@chakra-ui/layout';
import { Component } from 'react';

class EventBind extends Component {
  // ! Use rconst as a shortcut!
  constructor() {
    super();
    this.state = {
      message: 'Hello',
    };
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   console.log(this)
  //   this.setState({message: 'Goodbye'})
  // }

  clickHandler = () => {
    this.setState({ message: 'Goodbye' });
  };

  // ! Use af as a shortcut!
  render() {
    return (
      <VStack justify="center" align="center" w="100%">
        <Heading>{this.state.message}</Heading>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <Button colorScheme="whatsapp" onClick={this.clickHandler}>
          Click
        </Button>
      </VStack>
    );
  }
}

export default EventBind;
