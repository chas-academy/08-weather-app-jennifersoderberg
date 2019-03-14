import React from 'react'
import { compose } from "recompose";

import withData from "../HOC/withData";

//Vi skapar en komponent...
const Container = ({data}) => WrappedComponent => {
  //..som returnerar en ny komponent..
  const container = props => <WrappedComponent {...props} />

  //..som returnerar withData som innehåller geolocation data nu...igen

  return compose(
    withData(data),
  )(container) //..och knyter denna till container (den nya componenten)


}

export default Container;