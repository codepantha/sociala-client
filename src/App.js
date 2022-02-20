import React from "react";
import { Home, Login, Profile, Register } from "./pages";
import { Navigate, Route, Routes } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const App = () => {
  const { data: userLoggedIn } = useSelector((state) => state.loginReducer);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            userLoggedIn.username ? <Home /> : <Navigate replace to="/login" />
          }
        />
        <Route
          path="/login"
          element={
            userLoggedIn.username ? <Navigate replace to="/" /> : <Login />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
