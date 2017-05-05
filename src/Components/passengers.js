import React from "react";

class Passengers extends React.Component {
  render() {
    return (
      <div class="booking_frame">
        <div class="selected_dates">
          <div class="booking_calendar_icon">
            <img src="booking_dagatal.svg" alt="" />
          </div>
          <div class="current_date_selected">
            <p>9 February 2017</p>
            {/* <!-- Hér kemur dagsetning sem var valin --> */}
          </div>
          <div class="booking_calendar_icon">
            <img
              className=""
              src={
                process.env.PUBLIC_URL + "/img/booking/booking_arrow_down.svg"
              }
              alt=""
            />

          </div>
        </div>

        <div class="select_passengers">

          <div class="types_of_passengers">
            <div class="passenger_type">
              Adult
            </div>
            <div class="passenger_age">
              16+ years
            </div>
          </div>

          <div class="passenger_multiplier">

            <div class="multiplier_minus">
              <img
                className=""
                src={
                  process.env.PUBLIC_URL +
                    "/img/booking/booking_passengers_minus.svg"
                }
                alt=""
              />

            </div>
            <div class="multiplier_amount">
              1
            </div>
            <div class="multiplier_plus">

              <img
                className=""
                src={
                  process.env.PUBLIC_URL +
                    "/img/booking/booking_passengers_plus.svg"
                }
                alt=""
              />

            </div>

          </div>

        </div>

        <div class="calculated_price">
          {/* <!-- Hér kemur reiknað verð --> */}
        </div>

      </div>
    );
  }
}

export default Passengers;
