import React from "react";

class CartCounter extends React.Component {
  render() {
    return (
      <div class="booking_frame">
      <div class="incart_tripinfo">
        <h3>Take a walk on the ice side</h3> <!-- Set þetta sem H3 en þarf að stilla í framenda -->
        <p>1 adult</p> <!-- Hér þarf að sækja passengers og aukalínu ef við á -->
        <p>24.900 ISK</p> <!-- Hér þarf að sækja reiknað verð -->
        <p>Lorem ipsum</p> <!-- Aukatexti með ferð? -->
      </div>
    </div>
    );
  }
}

export default CartCounter;
