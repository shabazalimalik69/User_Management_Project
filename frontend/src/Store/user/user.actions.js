
import axios from "axios";
import { ADD_USER_Details, DELETE_ALL_USERS_DETAILS, DELETE_USER_DETAILS, EDIT_USER_DETAILS, GET_USER_DETAILS } from "./user.actionTypes";
  
  export const getUser = (token) => async (dispatch) => {
    try {
      const response = await axios.get(
        `https://user-management-9nnd.onrender.com/users`,
        { headers: { token: token } }
      );
       //console.log(response.data);
      dispatch({ type: GET_USER_DETAILS, payload: response.data});
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };


  
  export const addUser = (userData) => async (dispatch) => {
    try {
      const response = await axios.post(
        "https://user-management-9nnd.onrender.com/create",
        userData
      );
      // console.log(response.data)
      //  console.log(userD);
      dispatch({ type: ADD_USER_Details, payload: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };



  export const updateUser = (_id, userData1) => async (dispatch) => {
    try {
      const response = await axios.put(
        "https://user-management-9nnd.onrender.com/update/"+_id,
        userData1
      );
      //console.log(response);
      dispatch({ type: EDIT_USER_DETAILS, payload: response.data });
      dispatch(getUser(null));
    } catch (err) {
      console.log(err.message);
    }
  };
  


  export const deleteUser = (_id) => async (dispatch) => {
   // console.log(_id);
    try {
     await axios.delete("https://user-management-9nnd.onrender.com/delete/"+_id);     
      dispatch({ type: DELETE_USER_DETAILS });
      dispatch(getUser(null));
    } catch (err) {
      console.log(err.message);
    }
  };



  export const deleteAllUsers = () => async (dispatch) => {
    try {
      await axios.delete("https://user-management-9nnd.onrender.com/delete");
      // console.log(response);
      dispatch({ type: DELETE_ALL_USERS_DETAILS });
      dispatch(getUser(null));
    } catch (err) {
      console.log(err.message);
    }
  };
  