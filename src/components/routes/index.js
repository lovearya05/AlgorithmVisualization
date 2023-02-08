import React from 'react'
import {Routes, Route} from "react-router-dom"
// import Home from '../Home/Home'
// import Login from '../Login/Login'
// import Profile from '../Profile/Profile'
// import Signup from '../Signup/Signup'
import SinglyLinkList from "../algorithmsLinkList/SinglyLinkLIst"
import PathFinder from "../path-finder/PathFinder"
import BinarySearch from "../binarySearchComponent/binarySearch"
import Stack from "../Stack/Stack"
import Queue from "../Queue/Queue"
import  Home  from '../../Home'
// import Sorting from '../Sorting/Sorting'
// import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';


export default function RoutesServer(){
    return (
    <Routes>
        <Route exact path='/' element={< Home />}></Route>
        {/* <Route exact path='/login' element={< Login />}></Route> */}
        {/* <Route exact path='/signup' element={< Signup />}></Route> */}
        {/* <Route exact path='/profile' element={< Profile />}></Route> */}
        <Route  path='/singlylinklist' element={< SinglyLinkList/>}></Route>
        <Route  path='/PathFinder' element={< PathFinder/>}></Route>
        <Route  path='/BinarySearch' element={< BinarySearch/>}></Route>
        <Route  path='/stack' element={< Stack/>}></Route>
        <Route  path='/Queue' element={< Queue/>}></Route>
        {/* <Route  path='/Sorting' element={< SortingVisualizer/>}></Route> */}

    </Routes>   
    )
}