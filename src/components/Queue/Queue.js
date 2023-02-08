import React from "react";
import "./Queue.css";
import QueueVisualizer from "./QueueVisualizer";
// import Navbar from "../../Navbar/Navbar"


const termArray = ['Queue','Dequeue'];

export default class App extends React.Component {
  render() {
    return (
      <>
      {/* <Navbar /> */}
      <div className="QueueContainer">
         <QueueVisualizer structure="Queue" extra={termArray}/> 
      </div>
      </>
    );
  }
}
