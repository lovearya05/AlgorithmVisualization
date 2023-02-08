import React from "react";
import "./StackVisualizer.css";

const leftStyle = {
  padding: 10,
};

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: this.props.structure,
      size: "",
      number: "",
      top: 0,
      terms: this.props.extra,
    };
  }

  //Updates the array structure every time a number is pushed
  updateStructure = () => {
    let box = document.getElementById(`${this.state.top}`);
    box.innerHTML = `${this.state.number}`;

    this.updateTop(`${this.state.top}`);
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

    this.updateTop(`${this.state.top}`);
  };

  updateTop = (topParam) => {
    let top = document.getElementById("topDisplay");
    top.innerHTML = topParam;
  };

  //Called with the onClick event of the "submit" putton
  SizeHandler = (event) => {
    event.preventDefault();
    this.createStructure();
  };

  //Called with the onCick event of the "push" button
  NumberHandler = (event) => {
    event.preventDefault();
    if (this.state.top < this.state.size) {
      this.setState({
        top: this.state.top + 1,
      });
      this.updateStructure();
    } else {
      alert(`${this.state.structure} overflow`);
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
    if (this.state.top > 0) {
      this.setState({
        top: this.state.top - 1,
      });

      let removal = document.getElementById(`${this.state.top - 1}`);
      removal.innerHTML = "";
      let tempnum = `${this.state.top}`;
      if (tempnum - 2 >= 0) {
        this.updateTop(`${this.state.top - 2}`);
      } else {
        this.updateTop(0);
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
            <form onSubmit={this.SizeHandler}>
              <input
                type="number"
                id="size"
                min="0"
                max="20"
                size="25"
                onChange={this.SizeChangeHandler}
              />
              <input type="submit" id="Sbtn" size="25" />
            </form>
          </div>
          <div className="NumberChildContainer">
            <h5>{this.state.terms[0]} Number</h5>
            <form onSubmit={this.NumberHandler}>
              <input
                type="number"
                id="number"
                min="0"
                size="25"
                onChange={this.NumberChangeHandler}
              />
              <input type="submit" id="Sbtn" size="25" />
            </form>
          </div>
          <div className="RemoveChildContainer">
            <h5>{this.state.terms[1]} Element</h5>
            <button id="popBtn" onClick={this.removeHandler}>
              {this.state.terms[1]}
            </button>
          </div>
        </div>
        <div className="topContainer">
          <table>
            <caption id="caption">Top of {this.state.structure}</caption>
            <tr>
              <tbody>
              <td id="topDisplay"></td>
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
