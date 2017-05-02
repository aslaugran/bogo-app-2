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
  }
  render () {
    return (
      <div>
          <TourList data={this.state.tours}/>
      </div>
    )
  }
}
