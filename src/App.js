import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import RoutesServer from "./components/routes/index";
// import Home from "./Home";


function App() {
  return (
   <>
     <Router>
        <Navbar />
        <RoutesServer />
    </Router>
   </>
  );
}

export default App;