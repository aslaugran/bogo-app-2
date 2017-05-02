import React, { Component } from "react";
import { Link } from 'react-router-dom';

<<<<<<< HEAD
export default class Tour extends Component {
  constructor(props) {
    super(props);
  };

  render () {
    var cardPhoto = "http://www.extranet.bogo.is"+ this.props.photo;
    var CardBackground = {
      backgroundImage: "url('"+ cardPhoto +"')"
    }
    var tourLink = "/tour/" + this.props.id;
    return (
      <Link to={tourLink}>
      <div className="tourcard" style={CardBackground}>
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
=======
const Tour = props => (
  <div className="tourcard" onClick={props.onTourSelected}>

    <div className="image_gradient" />
    <img
      className="tourimg"
      src={"http://extranet.bogo.is" + props.photo}
      alt=""
    />
    <div className="tourdetails">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h3>{props.name}</h3>
        </div>
        <div className="col-md-8 col-sm-8 col-xs-8">
          <p>{props.text}</p>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <p>{props.price} ISK</p>
>>>>>>> 44900a3ae8110a35cdcccf65f81e47180c387dc6
        </div>
      </div>
      </Link>
    )
  }
}
