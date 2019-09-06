import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import Header from "./Components/Header/Header";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {Routes}
      </div>
    );
  }
}

export default App;
