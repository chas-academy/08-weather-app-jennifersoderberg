import React from "react";

const withLocation = WrappedComponent =>
  class extends React.Component {
    constructor() {
      super();

      this.state = {
        position: {
          long: null,
          lat: null
        }
      };
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
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };

export default withLocation;