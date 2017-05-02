import React from "react";

const TourDetails = props => {
  let name = props.params.tour;
  return (
    <div>
      <h2>Featured {name}</h2>
      <p>Þetta er ferð!</p>
    </div>
  )
}

export default TourDetails;
