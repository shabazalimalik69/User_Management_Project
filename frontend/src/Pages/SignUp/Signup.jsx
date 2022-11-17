import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Text,
 
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { signupAPI } from "../../Store/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Signup.module.css";
const initData = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [userData, setUserData] = useState(initData);

  const dispatch = useDispatch();
  const { name, email, password } = userData;

  const error = useSelector((store) => store.auth.error);

  //console.log(error)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAPI(userData));
    setUserData(" ");
    window.location.reload(true);
  };

  let isInvalid = name === "" || email === "" || password === "";

  return (
    <Box className={styles.signup}>
      <Heading className={styles.text}>
        SignUp Here
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          bg="white"
          value={name}
          onChange={handleChange}
          placeholder="Enter Name..."
        />
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
        <Text
          fontWeight="bold"
          align="center"
          marginBottom={2}
          marginTop={2}
          color="brown"
        >
          {error ? "User Already Exists" : ""}
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
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Signup;
