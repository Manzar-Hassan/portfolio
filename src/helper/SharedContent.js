import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const SharedContent = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedContent;
