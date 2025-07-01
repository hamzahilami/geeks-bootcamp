import React from "react";
import FormComponent from "./FormComponent";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      lactoseFree: false
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams();
    for (let key in this.state) {
      const value =
        typeof this.state[key] === "boolean"
          ? this.state[key] ? "on" : ""
          : this.state[key];
      queryParams.append(key, value);
    }
    const queryString = queryParams.toString();
    window.history.pushState({}, "", `/?${queryString}`);
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="title">Travel Form</h1>
        <FormComponent
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
