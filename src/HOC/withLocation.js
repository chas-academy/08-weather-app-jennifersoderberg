import React from "react";
import ForecastsDataContainer from "../components/forecasts/ForecastsDataContainer";

const withLocation = WrappedComponent =>
  class extends React.Component {
    state = {
      position: {
        long: null,
        lat: null
      }
    }
  
    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(position =>
        this.setState({
          ...this.state,
          position: {
            long: position.coords.longitude,
            lat: position.coords.latitude
          }
        })
      );
    }

    render() {
      const { position } = this.state; 
      return (
        <WrappedComponent 
        position={position} 
        {...this.props} 
      />
      )
    }  
  };

export default withLocation;