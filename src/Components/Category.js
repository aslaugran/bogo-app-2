import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Category extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
   console.log('this is:', this.props.color);
 }


  render () {
    return (
      <div onClick={(e) => this.handleClick(e)} className="col-md-4 col-sm-4 categorie_single">
        <Link to={'/tours/'+ this.props.url}>
          <img className="categorie_single adventure" src={this.props.img} alt="" />
        <h3 className="cat_title">{this.props.name}</h3>
        </Link>
      </div>
    )
  }
}
