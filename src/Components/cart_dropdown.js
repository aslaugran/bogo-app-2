import React from "react";

class CartDropdown extends React.Component {
  render() {
    return (
      <div class="booking_frame">
        <div class="cart_dropdown_wrapper">
          <div class="cart_dropdown_image">
            <div class="cart_dropdown_remove">

              <img
                className=""
                src={process.env.PUBLIC_URL + "/img/cart/remove.svg"}
                alt=""
              />

            </div>
          </div>
          <div class="cart_dropdown_title_price">
            <div class="cart_dropdown_title">
              <p>Take a walk on the ice side</p>
            </div>
            <div class="cart_dropdown_price">
              <p>24.900 ISK</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default CartDropdown;
