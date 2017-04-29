import React, { Component } from "react";
import Tour from "./Tour";
import tours from "../json/tours.json";
import axios from "axios";
import Slider from "react-slick";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    const { categoryId } = this.props;

    axios
      .get("http://www.extranet.bogo.is/api/tours/58fcc108ecc2cc0282ccad6e")
      .then(response => {
        console.log(response);
        this.setState({ tours: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    setTimeout(() => {
      this.setState({
        tours: tours.data
      });
    }, 200);
  }

  render() {
    const { tours } = this.state;
    var settings = {
      arrows: false,
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 1,
      centerMode: true,
      resonsive: [
        {
          breakpoint: 1366,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "80px",
            slidesToShow: 1
          }
        }
      ]
    };

    if (tours.length === 0) {
      return <div>LOADING</div>;
    }
    const toursList = tours.map((tour, index) => {
      return (
        <Tour
          data={tour}
          key={index}
          onTourSelected={this.props.onTourSelected}
        />
      );
    });

    return (
      <div className="tours_container container-fluid card-swipe">
        <Slider {...settings}>
          <div className="tourcard">
            <div className="image_gradient" />

            {/* React componentinn sem sækir ferðirnar */}
            <div>{toursList}</div>

            <img
              className="tourimg"
              src="https://bokunprod.imgix.net/2fff3d40-81f7-4307-bed2-2c69e323d7ba.jpg?w=1200"
              alt=""
            />
            <div className="tourdetails">
              <h3>Take a walk on the ice side</h3>
              <p>Always a fun day!</p>
            </div>
          </div>
          <div className="tourcard">
            <div className="image_gradient" />
            <img
              className="tourimg"
              src="https://guidetoiceland.is/image/284561/x/0/golden-circle-and-geothermal-greenhouses-immersive-day-tour-5.jpg"
              alt=""
            />
            <div className="tourdetails">
              <h3>The Golden Circle</h3>
              <p>Always a fun day!</p>
            </div>
          </div>
          <div className="tourcard">
            <div className="image_gradient" />
            <img
              className="tourimg"
              src="http://myvisitsouthiceland.is/wp-content/uploads/2016/08/thorsmork.jpg"
              alt=""
            />
            <div className="tourdetails">
              <h3>Thorsmork</h3>
              <p>Always a fun day!</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
