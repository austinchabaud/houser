import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/wizard/stepOne">
          <button onClick={() => this.state}>Previous</button>
        </Link>
        <Link to="/wizard/stepThree">
          <button onClick={() => this.state}>Next</button>
        </Link>
      </div>
    );
  }
}
