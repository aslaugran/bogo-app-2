import React, { Component } from "react";
import BookingDates from "./BookingDates";



export default class BookingSidebar extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="booking-sidebar">
        <div className="booking_calendar">
          <p>Choose your date</p><hr className="sidebar-line"></hr>
        </div>
        <BookingDates/>
          <p>Departures</p><hr className="sidebar-line"></hr>
          <div className="row departures">
            <div className="departure col-md-4"><p>24:00</p></div>
          </div>
      </div>
    );
  }
}
