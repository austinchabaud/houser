import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default class Wizard extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/wizard/stepOne" Component={StepOne} />
          <Route path="/wizard/stepTwo" Component={StepTwo} />
          <Route path="/wizard/stepThree" Component={StepThree} />
        </Switch>
        <StepOne />
        <Link to="/" className="links">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
