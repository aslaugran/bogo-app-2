import React, { Component } from "react";
import "../dist/style.css";
import AppHeader from "./Components/AppHeader";
import CategoryList from "./Components/CategoryList";
import TourList from "./Components/TourList";
import TourDetails from "./Components/TourDetails";
import axios from "axios";

import categories from "./json/categories.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tours: [],
      selectedCategory: null,
      selectedTour: null
    };

    this.handleCategorySelected = this.handleCategorySelected.bind(this);
    this.handleTourSelected = this.handleTourSelected.bind(this);
  }

  componentDidMount() {
    this.setState({
      categories: categories.data
    });
    axios
      .get("http://www.extranet.bogo.is/api/tours/58fcc108ecc2cc0282ccad6e")
      .then(response => {
        this.setState({
          tours: response.data
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  handleHomeSelected(data) {
    console.log("Home");
  }

  handleCategorySelected(id) {
    this.setState({
      selectedCategory: id
    });
  }

  handleTourSelected(id) {
    this.setState({
      selectedCategory: false
    });
    this.setState({
      selectedTour: id
    });
  }

  render() {
    const {
      categories,
      selectedCategory,
      selectedTour,
      selectedHome
    } = this.state;
    let categoryList;
    let tourList;
    let tours;

    if (selectedCategory) {
      tourList = (
        <TourList
          data={this.state.tours}
          onTourSelected={id => this.handleTourSelected(id)}
        />
      );
    } else if (selectedTour) {
      tours = <TourDetails data={selectedTour} />;
    } else {
      categoryList = (
        <CategoryList
          data={categories}
          onCategorySelected={id => this.handleCategorySelected(id)}
        />
      );
    }

    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <AppHeader />
          </div>
        </div>
        <div className="main-content">
          {categoryList}
          {tourList}
          {tours}
        </div>
      </div>
    );
  }
}
