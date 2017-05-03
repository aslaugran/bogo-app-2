import React, { Component } from "react";
import Slider from "react-slick";
import Tour from "./Tour";
// import axios from "axios";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  render() {
    // const results = this.props.data;
    // console.log("data er: ", this.props.data);

    const { TourSelected } = this.state;
    const results = this.props.data;
    let tours = results.map(tour => (
      <div>
        <Tour
          photo={tour.mainphoto}
          key={tour.tourid}
          id={tour.tourid}
          name={tour.name}
          text={tour.introtext}
          price={tour.priceadult}
        />
      </div>
    ));

    var settings = {
      centerMode: true,
      centerPadding: "120px",
      slidesToShow: 1,
      speed: 200
    };

    return (
      <div style={this.props.background} className="container-fluid card-swipe">
        <Slider {...settings}>
          <div>{tours}</div>
        </Slider>
      </div>
    );
  }

  //   this.handleClick = this.handleClick.bind(this);
  // }
  //
  // handleClick(tourid) {
  //   const selectedTour = this.props.data.filter(tour => {
  //     return tour.tourid === tourid;
  //   });
  //   console.log(selectedTour);
  //   const id = selectedTour[0];
  //   this.props.onTourSelected(id);
  // }

  // setTimeout(() => {
  //   this.setState({
  //     tours: tours.data
  //   });
  // }, 200);
}
