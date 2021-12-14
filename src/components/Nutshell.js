import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Regitser } from "./auth/Register";

class Nutshell extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regitser />} />
      </Routes>
    );
  }
}

const Auth = () => {
  if (localStorage.getItem('react_nutshell_user')) {
    return(
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default Nutshell;
