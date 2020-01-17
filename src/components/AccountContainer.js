import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import { transactions } from "../transactionsData";

const API = "https://boiling-brook-94902.herokuapp.com/transactions";

class AccountContainer extends Component {
  constructor() {
    super();
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transData: [],
      query: ""
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(transData => this.setState({ transData }));
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          transData={this.state.transData}
          query={this.state.query}
        />
      </div>
    );
  }
}

export default AccountContainer;
