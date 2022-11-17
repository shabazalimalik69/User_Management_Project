import { ADD_USER_Details, DELETE_ALL_USERS_DETAILS, DELETE_USER_DETAILS, EDIT_USER_DETAILS, GET_USER_DETAILS } from "./user.actionTypes";

  
  const initialState = {
    user: [],
  };
  const userReducer = (state = initialState, { type, payload }) => {
    //   console.log(payload);
    switch (type) {
      case GET_USER_DETAILS: {
        return {
          ...state,
          user: payload,
        };
      }
      case ADD_USER_Details: {
        return {
          ...state,
          user: [...state.user, payload],
        };
      }
      case EDIT_USER_DETAILS: {
        //console.log('id',payload._id)
        return {
          ...state,
          user: [...state.user, payload],
        };
      }
      case DELETE_USER_DETAILS: {
        return {
          ...state,
        };
      }
      case DELETE_ALL_USERS_DETAILS: {
        return {
          ...state,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default userReducer;
  