import {
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    Spacer,
    Stack,
    StylesProvider,
    Text,
  } from "@chakra-ui/react";
  import { CloseIcon, EditIcon } from "@chakra-ui/icons";
  
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
 
  import style from "./UserDetails.module.css";
import { logoutAPI } from "../../Store/auth/auth.actions";
import { addUser, deleteAllUsers, deleteUser, getUser, updateUser } from "../../Store/user/user.actions";
  
  
  const UserDetails = () => {
  
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  const [confirm_password,setConfirm_password] = useState("");
  const [error,setError] = useState("")
    const [show, setShow] = useState(false);
    const [editId, setEditId] = useState(-1);
    const [editHide, setEditHide] = useState(true);
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.user);
    const token = useSelector((store) => store.auth.accessToken);
    const Email = useSelector((store) => store.auth.email);
    const [userData1, setUserData1] = useState(user);
    const dispatch = useDispatch();
    //console.log(userData1)
  
    const userData = { username, email, password,confirm_password};
  
    const handleLogout = () => {
      dispatch(logoutAPI());
      navigate("/signin");
    };
  
    
  
    const handleChange1 = (e) => {
      const { name, value } = e.target;
      setUserData1({
        ...userData1,
        [name]: value,
      });
    };
  
    const isInvalid = username === "" || email === "" || password === "" || confirm_password === "" || password !== confirm_password;
  
    const checkValidation = (e) => {
      const confirmPassword = e.target.value;
      setConfirm_password(confirmPassword);
      if (password !== confirmPassword) {
        setError("Password should be same as confirm password");
      } else {
        setError("");
      }
    };
  
    const handleCancel = () => {
      setEditHide(true);
      window.location.reload(true);
    };
  
    const handleAdd = () => {
      dispatch(addUser(userData));
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirm_password("");
    };
  
    const handleEdit = (id) => {
      setEditId(id);
    };
  
    const handleDelete = (id) => {
      dispatch(deleteUser(id));
    };
    const handleUpdate = (id) => {
      dispatch(updateUser(id, userData1));
      window.location.reload(true);
    };
    const handleAllDelete = () => {
      dispatch(deleteAllUsers());
    };
  
    useEffect(() => {
      dispatch(getUser(token));
    }, [dispatch, token]);
  
    return (
      <>
        <Box>
          <Flex
            minWidth="max-content"
            height="80px"
            alignItems="center"
            bg="brown"
            gap="2"
          >
            <Box p="2">
              <Heading size="md" color="white">
                UM
              </Heading>
            </Box>
            <Spacer />
            <Box>
              <Text marginRight="10px" color="white">
                {Email}
              </Text>
              <Button mt="10px" width="50%" height="30px" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box className={style.container}>
          <Box className={style.sub_container}>
            <Button
            bg='green'
              type="button"
              onClick={() => setShow(true)}
              className={style.addbtn}>
              + Add User
            </Button>
            <FormControl className={show ? style.show_detail : style.hide_detail}>
              <Box className={style.form}>
                <Text className={style.closeIcon} onClick={handleCancel}>
                  <CloseIcon />
                </Text>
                <Box className={style.column2}>
                  <Text className={style.H1}>User Details</Text>
                  <Input
                   bg="white"
                   className={style.input}
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                    name="username"
                    type="text"
                    placeholder="UserName"
                  />
                  <Input
                   bg="white"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <Input
                   bg="white"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <Input
                   bg="white"
                    onChange={(e)=>checkValidation(e)}
                    value={confirm_password}
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                  />
                 <Text align="center" fontWeight="bold" color="brown">{error}</Text>
                    <Button
                      onClick={() => {
                        handleAdd();
                      }}
                      display="block"
                         marginTop={4}
                          alignItems="flex-center"
                          color="white"
                          backgroundColor="green"
                          _hover={{
                            outline: "#FA5D00",
                            bgColor: "blue",
                          }}
                          _focus={{
                            outline: "#FA5D00",
                            bgColor: "blue",
                          }}
                          disabled={isInvalid}
                    >
                      Submit
                    </Button>
              
                </Box>
              </Box>
            </FormControl>
  
            {/* ----------------------------------------------------------------------------------------- */}
            <Box className="show_added_data">
              {user?.map((elem) =>
                elem._id === editId ? (
                  <FormControl
                    className={editHide ? style.hide_detail : style.show_detail}
                  >
                    <Box className={style.form}>
                      <Box className={style.column1}>
                        <Text className={style.closeIcon} onClick={handleCancel}>
                          <CloseIcon />
                        </Text>
                        <Input
                          marginBottom={2}
                          onChange={handleChange1}
                          defaultValue={elem.username}
                          name="username"
                          type="text"
                          bg="white"
                          placeholder="Enter UserName"
                        />
                        <Input
                          marginBottom={2}
                          onChange={handleChange1}
                          defaultValue={elem.email}
                          bg="white"
                          name="email"
                          type="email"
                          disabled
                          placeholder="Enter Email"
                        />
                        <Input
                          onChange={handleChange1}
                          marginBottom={2}
                          defaultValue={elem.password}
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          bg="white"
                        />
                        <Input
                          bg="white"
                          onChange={handleChange1}
                          marginBottom={6}
                          defaultValue={elem.confirm_password}
                          name="confirm_password"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Box>
  
                      <Box>
                        <Button
                          display="inBlock"
                          marginRight={4}
                          marginBottom={4}
                          alignItems="flex-center"
                          color="white"
                          backgroundColor="green"
                          _hover={{
                            outline: "#FA5D00",
                            bgColor: "blue",
                          }}
                          _focus={{
                            outline: "#FA5D00",
                            bgColor: "blue",
                          }}
                          onClick={() => handleUpdate(elem._id)}
                          bg="green"
                          type="button"
                        >
                          Update
                        </Button>
  
                        <Button
                         marginBottom={4}
                         marginRight={4}
                          display="inBlock"
                          alignItems="flex-center"
                          color="white"
                          backgroundColor="brown"
                          _hover={{
                            outline: "#FA5D00",
                            bgColor: "red",
                          }}
                          _focus={{
                            outline: "#FA5D00",
                            bgColor: "red",
                          }}
                          onClick={() => {
                            handleDelete(elem._id);
                          }}
                          type="button"
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  </FormControl>
                ) : (
                  <Box marginTop={6} key={elem.id} className={style.show_elem}>
                    <Box w="15vw">
                      <p>{elem.username}</p>
                    </Box>
                    <Box className={style.elem_email}>
                      <p>{elem.email}</p>
                    </Box>
                    <Box className={style.elem_password}>
                      <p>{elem.password}</p>
                    </Box>
                    <Box className={style.elem_confirm_password}>
                      <p>{elem.confirm_password}</p>
                    </Box>
                    <Text
                      className={style.edit_button}
                      onClick={() => {
                        handleEdit(elem._id);
                        setEditHide(false);
                      }}
                     
                    >
                     <EditIcon/>
                    </Text>
                  </Box>
                )
              )}
              <Stack mt="20px" align="center">
                <Button
                  type="button"
                  display="block"
                  alignItems="flex-center"
                  color="white"
                  backgroundColor="brown"
                  _hover={{
                    outline: "#FA5D00",
                    bgColor: "red",
                  }}
                  _focus={{
                    outline: "#FA5D00",
                    bgColor: "red",
                  }}
                  onClick={handleAllDelete}
                >
                  DELETE ALL
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default UserDetails;
  