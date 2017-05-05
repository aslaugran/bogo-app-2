import React from "react";

class Pickup extends React.Component {
  render() {
    return (
      <div class="booking_frame">
        <div class="select_pickup">
          <div class="current_date_selected">
            <p>Hótel Holt</p>
            {/* <!-- Hér kemur hótel sem var valið --> */}
          </div>
          <div class="booking_calendar_icon">
            <img
              className=""
              src={
                process.env.PUBLIC_URL +
                  "/img/booking/booking_arrow_down_black.svg"
              }
              alt=""
            />

          </div>
        </div>

      </div>
    );
  }
}

export default Pickup;
