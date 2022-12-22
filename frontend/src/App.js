import React, { useEffect } from "react";
import {BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import RoutesServer from "./Components/routes/index";
import "./App.css"
import {auth} from "./firebase"


function App() {
  
  useEffect(() =>{
      auth.onAuthStateChanged(user =>{
        console.log("stated changed", user)
      })
  })

  return (
   <>
     <Router>
     {/* <Navbar /> */}
        <RoutesServer />
    </Router>
   </>
  );
}

export default App;