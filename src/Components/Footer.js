import React, { Component } from "react";
import { Link } from 'react-router-dom'

  export default class Footer extends Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <div className="booking_footer">
          <Link to="/">
          <div className="booking_back">
            <img src={process.env.PUBLIC_URL + "/img/nav_backarrow.svg"}/>
          </div>
        </Link>
          <div className="booking_button">
            <a href="#">BOOK NOW</a>
          </div>
        </div>
      )
    }
  }
