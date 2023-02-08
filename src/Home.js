import React from "react";
import BoxComponent from "./components/BoxComponent";
// import sorting from "./Images/sorting.png"
// import array from "./Images/array.png"
import stack from "./Images/stack.png"
import pq from "./Images/pq.png"
// import greedy from "./Images/greedy.png"
// import recursion from "./Images/recursion.png"
import tree from "./Images/tree.png"
import graph from "./Images/graph.png"
// import hashmap from "./Images/hashmap.png"
import linkList from "./Images/linkList.png"

import "./Home.css"
function Home(props) {


  return (
    <div>
      <div className="search">
         <input type='text'  placeholder="Search...." />
         <div>
          
         </div>
      </div>
      <div className="algo__btn">
        {/* <BoxComponent algo="Sorting" address="sorting" color="blue" image={sorting} /> */}
        <BoxComponent algo="LinkedList" address="singlylinklist" color="#359D5F" image={linkList} />
        {/* <BoxComponent algo="Hashmap" address="" image={hashmap} color="#F3CB67" /> */}
        <BoxComponent algo="Binary Search" address="BinarySearch" image={tree} color="#FB4FAC" />
        <BoxComponent algo="Graph" address="PathFinder" image={graph} color="#359D5F"/>
        {/* <BoxComponent algo="Recursion" address="" image={recursion} color="#555555" /> */}
        <BoxComponent algo="Stack" address="stack" image={stack} color="#3D0796" />
        <BoxComponent algo="Queue" address="Queue" image={pq} color="#90776D" />
      </div>
    </div>
  );
}

export default Home;
