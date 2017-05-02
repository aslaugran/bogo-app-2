import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class App extends Component {
  render () {
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
        <div className="main-content">
          { this.props.children }
        </div>
      </div>
    )
 }
}
