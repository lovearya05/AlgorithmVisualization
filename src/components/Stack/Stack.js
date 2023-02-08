import React from "react";
import "./Stack.css";
import StackVisualizer from "./StackVisualizer";
import Navbar from "../Navbar/Navbar"


const termArray = ['Push','Pop'];

export default class App extends React.Component {
  render() {
    return (
      <>
      {/* <Navbar /> */}
      <div className="StackContainer">
        <StackVisualizer structure="Stack" extra={termArray}/>
      </div>
      </>
    );
  }
}
