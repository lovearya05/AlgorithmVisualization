import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import RoutesServer from "./Components/routes/index";




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