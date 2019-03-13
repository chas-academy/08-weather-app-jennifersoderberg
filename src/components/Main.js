import React from 'react';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            long: null,
            lat: null
        }
    }

 componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({
      long: position.coords.longitude, 
      lat: position.coords.latitude
    })  
  );
}

    render() {
        return(
            <div style={outerDivStyle}>
                <div style={innerDivStyle}>
                    <h1>Main</h1>
                </div>
            </div>
        )
    }

    
}

const outerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%"
}

const innerDivStyle = {
    height: "80%",
    width: "80%",
    borderRadius: "10px",
    backgroundColor: "#ddf2ff"
}