import React from "react";

class CartCard extends React.Component {
  render() {
    return (
      // <!-- Ferðir í körfu -->
    <div class="total_cards">
      <div class="incart_card">
        <div class="remove_card">

          <img
            className=""
            src={
              process.env.PUBLIC_URL +
                "/img/cart/remove.svg"
            }
            alt=""
          />

        </div>
        <div class="cardcart_infotext">
          <div class="incart_card_tripname">
            <p>Take a walk on the ice side</p><!-- Hér kemur nafn á ferð -->
          </div>
          <div class="incart_card_tripprice">
            <p>24.900 ISK</p><!-- Hér kemur verð á ferð -->
          </div>
        </div>
      </div>

      <div class="incart_card2">
        <div class="remove_card">

          <img
            className=""
            src={
              process.env.PUBLIC_URL +
                "/img/cart/remove.svg"
            }
            alt=""
          />


        </div>
        <div class="cardcart_infotext">
          <div class="incart_card_tripname">
            <p>Take a walk on the ice side</p><!-- Hér kemur nafn á ferð -->
          </div>
          <div class="incart_card_tripprice">
            <p>24.900 ISK</p><!-- Hér kemur verð á ferð -->
          </div>
        </div>
      </div>

      <!-- Add another trip card -->
      <div class="incart_empty_card">
        <div class="empty_card_items">
          <div class="empty_card_plus">

            <img
              className=""
              src={
                process.env.PUBLIC_URL +
                  "/img/cart/add_another_trip_plus.svg"
              }
              alt=""
            />

          </div>
          <div class="incart_card_tripprice">
            <p>Add another trip</p>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default CartCard;
