import React from "react";
import BoxComponent from "./BoxComponent";
import sorting from "./Images/sorting.png"
import array from "./Images/array.png"
import stack from "./Images/stack.png"
import pq from "./Images/pq.png"
import greedy from "./Images/greedy.png"
import recursion from "./Images/recursion.png"
import tree from "./Images/tree.png"
import graph from "./Images/graph.png"
import hashmap from "./Images/hashmap.png"
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
        <BoxComponent algo="Sorting" address="sorting" color="blue" image={sorting} />
        <BoxComponent algo="LinkedList" address="singlylinklist" color="#359D5F" image={linkList} />
        <BoxComponent algo="Hashmap" image={hashmap} color="#F3CB67" />
        <BoxComponent algo="Tree" image={tree} color="#FB4FAC" />
        <BoxComponent algo="Graph" image={graph} color="#359D5F"/>
        <BoxComponent algo="Recursion" image={recursion} color="#555555" />
        <BoxComponent algo="Stack" image={stack} color="#3D0796" />
        <BoxComponent algo="Priority Queue" image={pq} color="#90776D" />
        <BoxComponent algo="Array" image={array} color="#C565FF" />
        <BoxComponent algo="Greedy" image={greedy} color="#D1DD45" />
      </div>
    </div>
  );
}

export default Home;
