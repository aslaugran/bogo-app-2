import React, { Component } from "react";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    axios
      .get("http://www.extranet.bogo.is/api/categories")
      .then(response => {
        this.setState({
          categories: response.data
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }
  render() {
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
                        <img
                          className="logo"
                          src={process.env.PUBLIC_URL + "/img/logo-borg.png"}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="vertical_line" />
                    <div className="cart_area">
                      <div className="vertical_line" />
                      <Link to="cart">
                        <img
                          className="cart_icon"
                          src={process.env.PUBLIC_URL + "/img/cart_icon.svg"}
                          alt=""
                        />
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
              <CategoryList data={this.state.categories} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
