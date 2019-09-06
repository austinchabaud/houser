import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addNewHouse = () => {
    let newHouse = {
      name: this.state.name,
      addresss: this.state.addresss,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    axios.post("/api/homes", { newHouse }).then(() => {
      this.props.push("/");
    });
  };
  render() {
    return (
      <div>
        <Link to="/wizard/stepTwo">
          <button onClick={() => this.state}>Previous</button>
        </Link>
        <Link to="/">
          <button onClick={() => this.addNewHouse}>Complete</button>
        </Link>
      </div>
    );
  }
}
