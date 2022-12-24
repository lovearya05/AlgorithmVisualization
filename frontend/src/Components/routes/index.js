import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Home/Home'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Signup from '../Signup/Signup'
import SinglyLinkList from "../algorithms/SinglyLinkLIst"
import PathFinder from "../../path-finder/PathFinder"


export default function RoutesServer(){
    return (
    <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/profile' element={< Profile />}></Route>
        <Route  path='/singlylinklist' element={< SinglyLinkList/>}></Route>
        <Route  path='/PathFinder' element={< PathFinder/>}></Route>
    </Routes>   
    )
}