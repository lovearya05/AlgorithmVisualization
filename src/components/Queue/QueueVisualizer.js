import React from "react";
import "./QueueVisualizer.css";

const leftStyle = {
  padding: 10,
};

let queue = new Array();

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: this.props.structure,
      size: "",
      number: "",
      front: 0,
      end: 0,
      terms: this.props.extra,
    };
  }

  //Updates the array structure every time a number is pushed
  updateStructure = () => {
    queue.push(`${this.state.number}`);

    for (let m = 0; m < queue.length; m++) {
      let box = document.getElementById(m);
      box.innerHTML = queue[m];
    }
    this.updateEnd(`${this.state.end}`);
  };

  //Creates the array structure
  createStructure = () => {
    let table = document.getElementById("tableContainer");
    let row = document.createElement("tr");
    row.id = "onlyRow";

    let temp_size = `${this.state.size}`;

    for (var i = 0; i < temp_size; i++) {
      var x = row.insertCell(i);
      x.innerHTML = " ";
      x.id = i;
    }
    table.appendChild(row);

    this.updateFront(`${this.state.front}`);
  };

  updateEnd = (endParam) => {
    let end = document.getElementById("endDisplay");
    end.innerHTML = endParam;
  };

  updateFront = (frontParam) => {
    let front = document.getElementById("frontDisplay");
    front.innerHTML = frontParam;
  };

  //Called with the onClick event of the "submit" putton
  SizeHandler = (event) => {
    event.preventDefault();
    this.createStructure();
  };

  //Called with the onCick event of the "push" button
  NumberHandler = (event) => {
    event.preventDefault();
    if (this.state.end < this.state.size) {
      this.setState({
        end: this.state.end + 1,
      });
      //alert(this.state.end);
      this.updateStructure();
    } else {
      alert(`${this.state.structure} is full`);
    }
  };

  //Updates the "size" state when the size is entered
  SizeChangeHandler = (event) => {
    this.setState({ size: event.target.value });
  };

  //Updates the "number" state when the number is entered
  NumberChangeHandler = (event) => {
    event.preventDefault();
    this.setState({
      number: document.getElementById("number").value,
    });
  };

  //gets called with the onClick event of the "pop" button
  removeHandler = () => {
    if (this.state.end > 0) {
      this.setState({
        end: this.state.end - 1,
      });

      queue.shift();

      document.getElementById(`${this.state.end - 1}`).innerHTML = "";

      for (let m = 0; m < queue.length; m++) {
        let box = document.getElementById(m);
        box.innerHTML = queue[m];
      }

      let tempnum = `${this.state.end}`;
      if (tempnum - 2 >= 0) {
        this.updateEnd(`${this.state.end - 1}`);
      } else {
        this.updateEnd(0);
      }
    } else {
      alert(`${this.state.structure} is empty`);
    }
  };

  render() {
    return (
      <div className="MainContainer">
        <div className="InputContainer">
          <div className="SizeChildContainer" style={leftStyle}>
            <h5>Enter Size Of {this.state.structure} :</h5>
            <form className="form__queue" onSubmit={this.SizeHandler}>
              <input
                type="number"
                id="size"
                min="0"
                max="20"
                size="25"
                onChange={this.SizeChangeHandler}
              />
              <button type="submit">Submit</button>
              {/* <input type="submit" id="Sbtn" size="25" /> */}
            </form>
          </div>
          <div className="NumberChildContainer">
            <h5>{this.state.terms[0]} Number</h5>
            <form className="form__queue" onSubmit={this.NumberHandler}>
              <input
                type="number"
                id="number"
                min="0"
                size="25"
                onChange={this.NumberChangeHandler}
              />
              <button type="submit">Submit</button>
              {/* <button type="submit" id="Sbtn" size="25" /> */}
            </form>
          </div>
          <div className="RemoveChildContainer">
            <h5>{this.state.terms[1]} Element</h5>
            <button id="popBtn" onClick={this.removeHandler}>
              {this.state.terms[1]}
          </button>
          </div>
          
        </div>
        <div className="frontContainer">
            <caption id="frontCaption">Front of {this.state.structure}</caption>
          <table>
            <tr>
              <tbody>
                <td id="frontDisplay"></td>
              </tbody>
            </tr>
          </table>
        </div>
        <div className="endContainer">
          <table>
            <caption id="endCaption">End of {this.state.structure}</caption>
            <tr>
              <tbody>
                <td id="endDisplay"></td>
              </tbody>
            </tr>
          </table>
        </div>
        <div className="visualizingContainer">
          <table id="tableContainer" />
        </div>
      </div>
    );
  }
}
