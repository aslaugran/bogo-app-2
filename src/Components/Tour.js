import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var cardPhoto = "http://www.extranet.bogo.is" + this.props.photo;
    var CardBackground = {
      backgroundImage: "url('" + cardPhoto + "')"
    };
    var tourLink = "/tour/" + this.props.id;
    return (
      <Link to={tourLink}>
        <div className="tourcard" style={CardBackground}>
          <div className="image_gradient" />
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
    );
  }
}
