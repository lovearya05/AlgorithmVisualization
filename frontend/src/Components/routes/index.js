import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Home/Home'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Signup from '../Signup/Signup'
import SinglyLinkList from "../algorithms/SinglyLinkLIst"
import Sorting from "../Sorting/visualizer"
import Queue from "../DSComponents/Queue/Queue"
import Stack from "../DSComponents/Stack/Stack"

export default function RoutesServer(){
    return (
    <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/profile' element={< Profile />}></Route>
        <Route  path='/singlylinklist' element={< SinglyLinkList/>}></Route>
        {/* <Route  path='/singlylinklist' element={< SinglyLinkList/>}></Route> */}
        <Route  path='/sorting' element={< Sorting/>}></Route>
        <Route  path='/stack' element={< Stack/>}></Route>
        <Route  path='/queue' element={< Queue/>}></Route>
        {/* <Route  path='/binarySearch' element={< BinarySearch/>}></Route> */}
    </Routes>   
    )
}