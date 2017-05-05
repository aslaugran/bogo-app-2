import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class CategoryTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }

  render () {
    const tagColor = this.props.tagColor;
    const catName = this.props.categoryName;
    const tagSecond = this.props.tagSecond;
    var changeBackground = {
      background: tagColor
    }
    var changeSecond = {
      background: tagSecond
    }
    console.log(tagColor)
    return (
      <div style={changeBackground} className="adventure_tag tag">
        <Link to={'/tours/'+ this.props.slug}>
        <div className="category_name">
          <p className="cat_tag_title">{catName}</p>
        </div>
        </Link>
        <div style={changeSecond} className="tag_close">
          <Link to="/">
              <img className="cat_tag_image" src={process.env.PUBLIC_URL + "/img/x.svg"} />
        </Link>
        </div>
      </div>
    )
  }
}
