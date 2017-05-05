import React from "react";

class Booking extends React.Component {
  render() {
    return (
      <div className="booking_frame">
        <div className="booking_calendar">
          <p>Choose your date</p><hr />
          <div className="calendar" />
        </div>
        <div className="booking_departure">
          <p>Choose departure</p><hr />
          <div className="time_picker" />
        </div>
      </div>
    );
  }
}

export default Booking;
