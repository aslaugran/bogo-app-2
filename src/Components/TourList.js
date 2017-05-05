import React, { Component } from "react";
import Slider from "react-slick";
import Tour from "./Tour";
import TourVideo from "./TourVideo";
import axios from "axios";

export default class TourList extends Component {
  render() {
    const results = this.props.data;
    let tours = results.map(
      function(tour, i) {
        if (tour.mainvideo != "/images/uploads/") {
          console.log(tour.mainvideo);
          return (
            <div>
              <TourVideo
                video={tour.mainvideo}
                photo={tour.mainphoto}
                item={tour}
                key={tour.tourid}
                id={tour.tourid}
                name={tour.name}
                text={tour.introtext}
                price={tour.priceadult}
              />
            </div>
          );
        } else {
          return (
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
          );
        }
      }.bind(this)
    );

    console.log(tours);
    var settings = {
      centerMode: true,
      centerPadding: "100px",
      slidesToShow: 1,
      speed: 300
    };

    return (
      <div style={this.props.background} className="container-fluid card-swipe">
        <Slider {...settings}>
          {tours}
        </Slider>
      </div>
    );
  }
}
