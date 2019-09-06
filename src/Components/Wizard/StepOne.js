import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.nameChange = this.nameChange.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.zipChange = this.nameChange.bind(this);
  }
  nameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  addressChange(e) {
    this.setState({
      address: e.target.value
    });
  }
  cityChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  stateChange(e) {
    this.setState({
      state: e.target.value
    });
  }
  zipChange(e) {
    this.setState({
      zip: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <form>
          <div>
            Property name
            <input onChange={this.nameChange}></input>
          </div>
          <div>
            Address
            <input onChange={this.addressChange}></input>
          </div>
          <div>
            City
            <input onChange={this.cityChange}></input>
          </div>
          <div>
            State
            <input onChange={this.stateChange}></input>
          </div>
          <div>
            Zip
            <input onChange={this.zipChange}></input>
          </div>
        </form>
        <Link to="/">
          <button onClick={() => this.state}>Complete</button>
        </Link>
      </div>
    );
  }
}
