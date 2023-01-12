import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./containers/Home.js";
import AboutMe from "./containers/AboutMe.js";
import Projects from "./containers/Projects.js";
import Contact from "./containers/Contact.js";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-me" element={<AboutMe/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
