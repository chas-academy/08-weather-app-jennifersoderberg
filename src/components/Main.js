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
            <div style={divStyle}>
                <h1>Main</h1>
            </div>
        )
    }

    
}

const divStyle = {
    height: "80%",
    backgroundColor: "lightyellow"
}