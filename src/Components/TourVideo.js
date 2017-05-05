import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class TourVideo extends Component {
  constructor(props) {
    super(props);
  };

  render () {
    var cardvideo = "http://extranet.bogo.is/"+ this.props.video;
    var tourLink = "/tour/" + this.props.id;
    return (
      <Link to={tourLink}>
        <div className="tourcard video-card">
          <video id="background-video" loop autoPlay>
            <source src={cardvideo} type="video/mp4"/>
            <source src={cardvideo} type="video/ogg"/>
          </video>
        <div className="image_gradient"></div>
        <div className="tourdetails">
          <div className="row tour-card-container">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <h3>{this.props.name}</h3>
              </div>
              <div className="col-md-9 col-sm-9 col-xs-9">
              <p>{this.props.text}</p>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 tour-price">
              <p>{this.props.price} ISK</p>
            </div>
          </div>
        </div>

    </div>
      </Link>
    )
  }
}
