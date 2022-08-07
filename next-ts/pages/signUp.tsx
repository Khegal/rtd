import React from 'react';
import { useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';

const [ password, setPassword] = useState("")
const [ username, setUsername] = useState("")
const [ email, setEmail] = useState("")
const [ reEnterpassword, setReEnterPassword] = useState("")
const [ phoneNum, setPhoneNum] = useState("")

const signUpPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Sign Up</Heading>
        <Input
          placeholder="example@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="password"
          type="password"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="re-enter your password"
          type="reEnterPass"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="username"
          type="username"
          variant="filled"
          mb={3}
        />
        <Button colorScheme="teal" mb={8}>
          Sign Up
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Light Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

function signUp() {
    axios.post("http://localhost:5000/user/users",{username: username, password:password, mail:email, phoneNumber:phoneNum})
}

export default signUpPage;