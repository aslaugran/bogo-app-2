import React, { Component } from "react";
import Slider from "react-slick";
import Tour from "./Tour";
import axios from 'axios';

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id } = this.props.data;
    this.props.onTourSelected(id)
  }


<<<<<<< HEAD
    setTimeout(() => {
      this.setState({
        tours: tours.data
      });
    }, 200);
  }
=======
    render() {
      const { TourSelected } = this.state;
      const results = this.props.data;
      let tours = results.map(tour =>
        <div><Tour
        photo={tour.mainphoto}
        key={tour.tourid}
        id={tour.tourid}
        name={tour.name}
        text={tour.introtext}
        price={tour.priceadult}
        onTourSelected={id => this.props.onCategorySelected(id)}/></div>
      );

>>>>>>> 1c841173dbde68c4dfc6c46733d7f0244d6b2b8b

    var settings = {
      centerMode: true,
      centerPadding: '120px',
      slidesToShow: 1,
      speed: 200,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '400px',
        slidesToShow: 1
      }
    }
  ]
    };

    return <div style={this.props.background} className="container-fluid card-swipe">
      <Slider {...settings}>
        {tours}
      </Slider>
      </div>;
  }
}
