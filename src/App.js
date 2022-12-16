import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar.js";
import Home from "./containers/Home.js";

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
      </Routes>
    </Router>
  );
}

export default App;
