<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

export default class AppHeader extends Component {
render() {
    return (
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
          <div className="cart_area">
            <div className="vertical_line"></div>
            <img className="cart_icon" src={process.env.PUBLIC_URL + "/img/cart_icon.svg"} alt="" />
          </div>
=======
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class AppHeader extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="inner">
          <header>
            <div className="header">
              <div className="logo_area">
                <Link to="/">
                  <img
                    className="logo"
                    src={process.env.PUBLIC_URL + "/img/logo-borg.png"}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="vertical_line" />
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
>>>>>>> 7d7f49f5315503906a3fe3e757e9c1b458630e82
        </div>
      </div>
    );
  }
}
