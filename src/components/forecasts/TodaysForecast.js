import React from "react";

const TodaysForecast = ({ data }) => (
  <div>
    <h1>Todays forecast!</h1>
    <p>Weather:</p>
    <ul>
      {console.log(data.currently)}
    </ul>
  </div>
);

export default TodaysForecast;