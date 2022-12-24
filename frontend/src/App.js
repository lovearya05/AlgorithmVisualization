import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import RoutesServer from "./Components/routes/index";
import "./App.css"
import {auth} from "./firebase"
import {AuthProvider} from "./AuthProvider"
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  
  const [user, setUser] =  useState();

  const authUser = () =>{
     auth.onAuthStateChanged(user =>{
      if(user) {
        setUser({user})
      }else{
        setUser({user:null})
      }
    })
  }
  useEffect(() =>{
    authUser();
    // console.log(user)
  })
  // useEffect(() =>{
  //     auth.onAuthStateChanged(user =>{
  //       console.log("stated changed", user)
  //     })
  // })

  return (
  //  <>
  //    <Router>
  //   </Router>
  //  </>
  // <AuthProvider>
      <div className="app">
        {/* {user === "user" ? */}
        {/* {user  == null ? <h2>Hello</h2> : <h2>No</h2>} */}
        <Router>
          {/* <Navbar /> */}
          <RoutesServer />
       </Router> 
        {/* :
        <Router>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        </Router>
        } */}
      
      </div>
    // </AuthProvider>
  );
}

export default App;