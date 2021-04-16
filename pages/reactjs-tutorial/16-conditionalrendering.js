//! Level 8.5/10 Difficulty!
import { Heading, VStack } from '@chakra-ui/layout';
import { Component } from 'react';

class UserGetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Heading textAlign="center" w="100%">
          Welcome Shayan
        </Heading>
      );
    }

    return (
      <Heading textAlign="center" w="100%">
        Welcome guest
      </Heading>
    );
  }
}

//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>Welcome Vishwas</div>;
//     }
//     return <div>Welcome Guest</div>;
//   }
// }
export default UserGetting;
