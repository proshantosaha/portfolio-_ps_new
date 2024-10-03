import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Aritcles from "./pages/Aritcles";
import ThemeProvider from "./provider/ThmeProvider";
import Page from "./page";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </>
  );
};

export default App;
