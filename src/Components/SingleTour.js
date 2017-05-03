import React, { Component } from "react";
import TourDetails from "./TourDetails";
import axios from 'axios';

export default class SingleTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }
  componentDidMount() {
    let tourId = this.props.match.params.tour;
    let apiUrl = 'http://www.extranet.bogo.is/api/tours/'+ tourId;
    axios.get(apiUrl)
      .then(response => {
        this.setState({
          tour: response.data[0]
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render () {
    return (
      <div>
          <TourDetails data={this.state.tour}/>
      </div>
    )
  }
}
