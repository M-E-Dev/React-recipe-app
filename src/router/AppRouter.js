import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Details from "../components/details/Details";
import About from "../pages/about/About";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="/details" element={<Details />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
