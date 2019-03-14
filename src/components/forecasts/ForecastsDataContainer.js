import { compose } from 'recompose'

import Container from '../../HOC/Container'

import TodaysForecast from './TodaysForecast'

export default compose(
  Container({
    position: {
      lat: null,
      long: null
    },
    data: {
      url: null,
    }
  }),
)(TodaysForecast)