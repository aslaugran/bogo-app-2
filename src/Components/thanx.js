import React from "react";

class CartCounter extends React.Component {
  render() {
    return (
      <div class="thankyou_card">
        <div class="thankyou_remove">

          <img
            className=""
            src={process.env.PUBLIC_URL + "/img/cart/remove_trip_close_x.svg"}
            alt=""
          />

        </div>
        <div class="thankyou_bottom_container">
          <div class="thankyou_tripinfo">
            <h1>Thank you</h1>
            <p>
              An email / SMS has been sent to you for you to confirm and pay your booking
            </p>
          </div>
          <div class="thankyou_timer">
            <p>This window will auto close in 30 sec</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartCounter;
