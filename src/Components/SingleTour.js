import React, { Component } from "react";
import TourDetails from "./TourDetails";
import CategoryTag from "./CategoryTag";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }
  componentDidMount() {
    let tourId = this.props.match.params.tour;
    let apiUrl = 'http://www.extranet.bogo.is/api/tours/'+ tourId;
    axios.get(apiUrl)
      .then(response => {
        this.setState({
          tourname: response.data[0].name,
          mainphoto: response.data[0].mainphoto,
          introtext: response.data[0].introtext,
          description: response.data[0].description,
          tourtitle: response.data[0].tourtitle,
          duration: response.data[0].duration,
          supplier: response.data[0].supplier,
          additionalinfo: response.data[0].additionalinfo,
          category: response.data[0].category
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render () {
    let tourCategory = this.state.category;
    let categoryUrl = "http://www.extranet.bogo.is/api/categories/"+ tourCategory;
    axios.get(categoryUrl)
      .then(response => {
        this.setState({
          background: response.data[0].color,
          tagColor: response.data[0].color,
          tagSecond: response.data[0].secondcolor,
          categoryName: response.data[0].name,
          slug: response.data[0].slug
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <div className="main-header">
              <div className="inner">
            <header>
              <div className="header">
                <div className="logo_area">
                  <Link to="/">
                    <img className="logo" src={process.env.PUBLIC_URL + "/img/logo-borg.png"} alt="Logo"/>
                  </Link>
                </div>
                <div className="vertical_line">
                </div>
                <CategoryTag categoryName={this.state.categoryName} slug={this.state.slug} tagSecond={this.state.tagSecond} tagColor={this.state.tagColor}/>
                <div className="cart_area">
                  <div className="vertical_line"></div>
                  <Link to="cart">
                    <img className="cart_icon" src={process.env.PUBLIC_URL + "/img/cart_icon.svg"} alt="" />
                  </Link>
                </div>
              </div>
            </header>
          </div>
          </div>
        </div>
        </div>
      <div>
      <div className="main-content">
      <div>
          <TourDetails
            tourname={this.state.tourname}
            mainphoto={this.state.mainphoto}
            herotext={this.state.introtext}
            description={this.state.description}
            tourtitle={this.state.tourtitle}
            duration={this.state.duration}
            supplier={this.state.supplier}
            additionalinfo={this.state.additionalinfo}
          />
      </div>
    </div>
    </div>
    </div>
    )
  }
}
