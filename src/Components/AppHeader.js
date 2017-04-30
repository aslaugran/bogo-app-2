import React, { Component } from 'react';

export default class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
    };
  }

  handleHomeSelected(data) {
    console.log("Home");
  }

  render() {
    const { selectedHome } = this.state;
    return (
      <header>
        <div className="header">
          <div className="logo_area">
            <img className="logo" src={process.env.PUBLIC_URL + "/img/logo-borg.png"} alt="" onHomeSelected={this.handleHomeSelected}/>
          </div>
          <div className="vertical_line">
          </div>
          <div className="cart_area">
            <div className="vertical_line"></div>
            <img className="cart_icon" src={process.env.PUBLIC_URL + "/img/cart_icon.svg"} alt="" />
          </div>
        </div>
      </header>
    );
  }
}
