import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Details from "../components/details/Details";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/details" element={<Details/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
