import React from "react";
class Child extends React.Component{
    componentWillUnmount(){
        alert("component will be unmounted")
    }
    render(){
        return <h2>Hello World!</h2>
    }
}


class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Color: "red",
      show:true,
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
    deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.Color}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        {this.state.show?<Child/>:<></>}
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

export default Color;
