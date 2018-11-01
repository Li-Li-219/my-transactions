import React, { Component } from "react";
import "./App.css";
import Filters from "./filters";
import TransactionsList from "../components/transactions-list";
import { filterDetail1, filterDetail2 } from "../data/filterDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>my transactions</h1>
        <hr />
        <div className="main-page">
          <div className="filters">
            <h3>filters</h3>
            <Filters {...filterDetail1} />
            <Filters {...filterDetail2} />
          </div>
          <div className="transactions" >
            <TransactionsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
