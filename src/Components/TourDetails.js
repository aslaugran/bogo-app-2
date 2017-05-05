import React, { Component } from "react";
import Slider from "react-slick";
import TourSidebar from "./TourSidebar";
import BookingSidebar from "./BookingSidebar";
import Footer from "./Footer";

export default class TourDetails extends Component {
  constructor(props) {
    super(props);
  };

   render() {
     var heroPhoto = "http://www.extranet.bogo.is"+ this.props.mainphoto;
     var heroImage = {
       backgroundImage: "url('"+ heroPhoto +"')"
     }

    return ( <div>            <div className="booking-active-overlay"></div>
      <div className="singe-tour-hero" style={heroImage}>
              <div className="single_gradient"></div>
                <div className="tour-intro">
                    <h1>{this.props.tourname}</h1>
                    <p>{this.props.herotext}</p>
              </div>
            <TourSidebar />
        </div>
        <div className="tour-page row">
          <div className="col-md-8 dec">
            <p className="tour-title">{this.props.tourtitle}</p>
            <p>{this.props.description}</p>

          </div>
          <div className="col-md-3 tour-sidebar">
            <BookingSidebar/>
            <h2>Tour details</h2>
            <img src={process.env.PUBLIC_URL + "/img/duration.svg"} className="Duration"/>
            <p className="duration"><strong>Duration</strong></p>
            <p className="duration">{this.props.duration} Hours</p>
            <h2 className="add-info">Additional Information</h2>
            <p>{this.props.additionalinfo}</p>
            <h2 className="supplier">Supplier</h2>
            <p className="supplier">{this.props.supplier}</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
