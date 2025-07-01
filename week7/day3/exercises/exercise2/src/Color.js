import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Color: "red",
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("in shouldComponentUpdate");
    return true; 
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ Color: "yellow" });
    }, 1000);
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ Color: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.Color}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default Color;
