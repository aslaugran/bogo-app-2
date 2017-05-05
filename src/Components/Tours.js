import React, { Component } from "react";
import TourList from "./TourList";
import { Link } from 'react-router-dom';
import CategoryTag from "./CategoryTag";
import axios from 'axios';

export default class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }
  componentDidMount() {
    let tourCategory = this.props.match.params.category;
    let apiUrl = 'http://www.extranet.bogo.is/api/58fcc108ecc2cc0282ccad6e/tours/'+ tourCategory;
    axios.get(apiUrl)
      .then(response => {
        this.setState({
          tours: response.data
        });
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
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
  }
  render () {
    var CategoryBackground = {
      background: this.state.background
    }
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
      <div className="main-content" style={CategoryBackground}>
      <div>
          {this.state.tours.length > 0 ?<TourList category={this.state.background} data={this.state.tours}/>: null }
      </div>
    </div>
    </div>
    </div>
    )
  }
}
