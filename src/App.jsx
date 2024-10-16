import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";

const App = () => {
  return<BrowserRouter>
  <Routes>
    <Route path="/" element={<Outlet />}>
    <Route index element={<Home />}></Route>
    <Route path="sign-in" element={<SignIn />}></Route>
    <Route path="sign-up" element={<SignUp />}></Route>
    <Route path="profile" element={<Profile />}></Route>
    <Route path="about" element={<About />}></Route>
    </Route>
  </Routes>
  </BrowserRouter>;
};

export default App;
