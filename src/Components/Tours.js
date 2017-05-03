import React, { Component } from "react";
import TourList from "./TourList";
import axios from 'axios';

export default class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }
  componentDidMount() {
    let tourCategory = this.props.match.params.category;
    let apiUrl = 'http://www.extranet.bogo.is/api/58fcc108ecc2cc0282ccad6e/tours/'+ tourCategory;
    axios.get(apiUrl)
      .then(response => {
        this.setState({
          tours: response.data
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    let categoryUrl = "http://www.extranet.bogo.is/api/categories/"+ tourCategory;
    axios.get(categoryUrl)
      .then(response => {
        this.setState({
          category: response.data[0].color
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render () {
    var CategoryBackground = {
      background: this.state.category
    }
    return (
      <div className="main-content" style={CategoryBackground}>
      <div>
          {this.state.tours.length > 0 ?<TourList category={this.state.category} data={this.state.tours}/>: null }
      </div>
    </div>
    )
  }
}
