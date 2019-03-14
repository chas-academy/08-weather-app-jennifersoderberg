import React from 'react';

const TodaysForecast = ({ data }) => (
    <div>
        <h1>Todays forecast!</h1>
        <p>Weather:</p>
        <ul>
            {data.currently ? (
              <div>
                <h1>{data.timezone}</h1>
                <p>{data.currently.summary}</p>
              </div>
            ) : (
                <h3>Loading…</h3>
            )}
        </ul>
    </div>
);

export default TodaysForecast;
