import React from 'react'
import { compose } from "recompose";

import withData from "../HOC/withData";
import withLocation from '../HOC/withLocation';

//Vi skapar en komponent...
const Container = ({ data }) => WrappedComponent => {
  //..som returnerar en ny komponent..
  const container = props => <WrappedComponent {...props} />

  //..som returnerar withData och withLocation...

  return compose(
    withLocation,
    withData(data),
  )(container) //..och knyter denna till container (den nya componenten)

  
}

export default Container