import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heading, Text, VStack } from '@chakra-ui/react';

const TodoList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);

  return (
    <VStack spacing={50} w="100%">
      <Heading fontWeight="900" fontSize="40px" color="red.500">
        {' '}
        Todo List{' '}
      </Heading>
      {todos &&
        todos.map((todo) => {
          const { id, userId, title } = todo;
          return (
            <div key={id}>
              <Text fontSize="3xl" fontWeight="500">
                {' '}
                {title}{' '}
              </Text>
              <Text align="center"> Assigned to user: {userId} </Text>
            </div>
          );
        })}
    </VStack>
  );
};

export default TodoList;
