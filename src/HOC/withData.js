import React from 'react'

//Vi skapar en komponent..
const withData = ({url}) => WrappedComponent =>
//..som returnerar en ny komponent..
  class extends React.Component {
    state = {
      data: [],
    }

    //..som gör ett API-anrop...
    componentDidMount() {
      fetch(url)
      .then(response => {
        return response;
      })
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch((error) => {
        console.log("error")
      });
    }

    //..och sedan renderar den wrappade componenten med API-datan
    render() {
      return (  
        <WrappedComponent 
          {...this.state}
          {...this.props}
        />
      )
    }
  }

export default withData;