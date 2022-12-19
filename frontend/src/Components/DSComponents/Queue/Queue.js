import React from "react";
import "./Queue.css";
import QueueVisualizer from "./QueueVisualizer";

const termArray = ['Queue','Dequeue'];

export default class App extends React.Component {
  render() {
    return (
      <div className="QueueContainer">
         <QueueVisualizer structure="Queue" extra={termArray}/> 
      </div>
    );
  }
}
