import { compose } from 'recompose'
import Container from '../../HOC/Container'

import TodaysForecast from './TodaysForecast'

const cors = process.env.REACT_APP_CORS_URL;
const darkSkyUrl = process.env.REACT_APP_DARK_SKY_URL;
const darkSkyKey = process.env.REACT_APP_DARK_SKY_KEY;

// Example lat/long
const lat = "59.405367,";
const long = "18.672657";

const weatherApiURL = `${cors}${darkSkyUrl}${darkSkyKey}${lat}${long}`

export default compose(
  Container({
    data: {
      url: weatherApiURL,
    },
  }),
)(TodaysForecast)