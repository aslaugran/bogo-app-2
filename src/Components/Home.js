import React, { Component } from "react";
import CategoryList from "./CategoryList";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    axios
      .get("http://www.extranet.bogo.is/api/categories")
      .then(response => {
        this.setState({
          categories: response.data
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }
  render() {
    return (
      <div className="main-content">
        <div>
          <CategoryList data={this.state.categories} />
        </div>
      </div>
    );
  }
}
