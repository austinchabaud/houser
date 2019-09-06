import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses = () => {
    axios
      .get("/api/houses")
      .then(response => {
        this.setState({
          houses: response.data
        });
      })
      .catch(err => {
        console.log("error on front", err);
      });
  };
  render() {
    let getHouses = this.state.houseList.map((houseList, id) => {
      return (
        <div key={id}>
          <p>{houseList.name}</p>
          <p>{houseList.address}</p>
          <p>{houseList.city}</p>
        </div>
      );
    });
    return (
      <div>
        <div className="house">{getHouses}</div>
        <House />
        <button onClick="Add New Property">
          <Link to="/wizard" className="links">
            Add New Property
          </Link>
        </button>
      </div>
    );
  }
}

export default Dashboard;
