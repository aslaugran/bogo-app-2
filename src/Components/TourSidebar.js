import React, { Component } from 'react';

export default class TourSidebar extends Component {
  constructor(props) {
    super(props);
  }




  render () {
    return (
      <div className="left-nav">
        <div className="nav-item">
          <img src={process.env.PUBLIC_URL + "/img/photo_icon.svg"} className="photos"/>
          <p>Photos</p>
        </div>
        <div className="nav-item">
          <img src={process.env.PUBLIC_URL + "/img/video_icon.svg"} className="videos"/>
          <p>Video</p>
        </div>
      </div>
    )
  }
}
