import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinAPI } from "../../Store/auth/auth.actions";

import styles from "./Signin.module.css";

const Signin = () => {
  const message = useSelector((store) => store.auth.msg);
  const error = useSelector((store) => store.auth.error);
  const token = useSelector((store) => store.auth.accessToken);
  console.log(token);
  //console.log(error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;
  const isInvalid = email === "" || password === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  //console.log(userData)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinAPI(userData));
  };

  if (token) {
    toast({
      position: "top-center",
      duration: 1000,
      render: () => (
        <Box borderRadius={5} align="center" color="white" p={3} bg="blue.500">
          Log In Successfully
        </Box>
      ),
    });
    navigate("/");
  }

  return (
    <Box className={styles.signin}>
      <Heading className={styles.text}>
        SignIn Here
      </Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          bg="white"
          value={email}
          onChange={handleChange}
          placeholder="Enter Email..."
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="text"
          name="password"
          bg="white"
          value={password}
          onChange={handleChange}
          placeholder="Enter Password..."
        />
        <Text color="brown" fontWeight="bold">
          {error ? message : " "}
        </Text>
        <Spacer />
        <Button
          marginTop={10}
          display="inBlock"
          alignItems="flex-center"
          color="white"
          backgroundColor="blue"
          _hover={{
            outline: "#FA5D00",
            bgColor: "green",
          }}
          _focus={{
            outline: "#FA5D00",
            bgColor: "blue",
          }}
          disabled={isInvalid}
          onClick={handleSubmit}
        >
          SignIn
        </Button>
      </FormControl>
    </Box>
  );
};

export default Signin;
