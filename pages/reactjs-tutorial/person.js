import { Heading } from '@chakra-ui/layout';
import React from 'react';

function Person({ person, key }) {
  return (
    <div>
      <Heading>
        Iam {person.name}. I am {person.age} years old. I know {person.skill}
      </Heading>
    </div>
  );
}

export default Person;
