import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../Pages/SignIn/Signin";
import Signup from "../Pages/SignUp/Signup";

const Router = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default Router;
