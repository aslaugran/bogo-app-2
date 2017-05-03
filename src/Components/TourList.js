import React, { Component } from "react";
import Slider from "react-slick";
import Tour from "./Tour";
import axios from "axios";

export default class TourList extends Component {
  render() {
    const results = this.props.data;
    let tours = results.map(tour => (
      <div>
        <Tour
          photo={tour.mainphoto}
          item={tour}
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
      centerPadding: "100px",
      slidesToShow: 1,
      speed: 500
    };

    return (
      <div style={this.props.background} className="container-fluid card-swipe">
        <Slider {...settings}>
          {tours}
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
