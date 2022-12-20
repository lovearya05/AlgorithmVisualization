import React from "react";
import "./Stack.css";
import StackVisualizer from "./StackVisualizer";

const termArray = ['Push','Pop'];

export default class App extends React.Component {
  render() {
    return (
      <div className="StackContainer">
        <StackVisualizer structure="Stack" extra={termArray}/>
      </div>
    );
  }
}
