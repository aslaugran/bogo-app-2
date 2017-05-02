<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

export default class AppHeader extends Component {
render() {
=======
import React, { Component } from "react";

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null
    };
  }

  handleHomeSelected(data) {
    console.log("Home");
  }

  render() {
    const { selectedHome } = this.state;
>>>>>>> 44900a3ae8110a35cdcccf65f81e47180c387dc6
    return (
      <div className="main-header">
        <div className="inner">
      <header>
        <div className="header">
          <div className="logo_area">
<<<<<<< HEAD
            <Link to="/">
              <img className="logo" src={process.env.PUBLIC_URL + "/img/logo-borg.png"} alt="Logo"/>
            </Link>
          </div>
          <div className="vertical_line">
=======
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/img/logo-borg.png"}
              alt=""
              // handleHomeSelected={this.handleHomeSelected}
            />
>>>>>>> 44900a3ae8110a35cdcccf65f81e47180c387dc6
          </div>
          <div className="vertical_line" />
          <div className="cart_area">
            <div className="vertical_line" />
            <img
              className="cart_icon"
              src={process.env.PUBLIC_URL + "/img/cart_icon.svg"}
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  </div>
    );
  }
}
