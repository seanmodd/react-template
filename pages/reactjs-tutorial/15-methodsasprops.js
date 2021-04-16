//! Level 8/10 Difficulty!

import { VStack } from '@chakra-ui/layout';
import { Component } from 'react';
import ChildComponent from './ChildComponent';

//! Use the shortcut rce to get the class component!

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: 'Parent',
    };

    this.greetParent = this.greetParent.bind(this);
  }

  //! Use the shortcut af to get the arrow function!
  // greetParent(idk) {
  //   alert(`Hello ${this.state.parentName} from ${idk}`);
  // }
  // ? Can also be written as below:
  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <VStack w="100%" align="center" justify="center">
        <ChildComponent greetHandler={this.greetParent} />
      </VStack>
    );
  }
}

export default ParentComponent;
