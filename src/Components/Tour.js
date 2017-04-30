import React, { Component } from "react";

const Tour = props => (
  <div className="tourcard">
        <div className="image_gradient"></div>
    <img className="tourimg" src={"http://extranet.bogo.is" + props.photo} alt=""/>
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
        </div>
      </div>
    </div>
  </div>
);

export default Tour;
