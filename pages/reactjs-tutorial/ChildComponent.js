//! Level 8/10 Difficulty!

import { Button } from '@chakra-ui/button';

const ChildComponent = (props) => (
  <div>
    <Button onClick={() => props.greetHandler('thechild')}>Greet Parent</Button>
  </div>
);

export default ChildComponent;
