import React from 'react';

const cors = process.env.REACT_APP_CORS_URL;
const darkSkyUrl = process.env.REACT_APP_DARK_SKY_URL;
const darkSkyKey = process.env.REACT_APP_DARK_SKY_KEY;

//Vi skapar en komponent..
const withData = ({ apiUrl, position }) => WrappedComponent =>
    //..som returnerar en ny komponent..
    class extends React.Component {
        state = {
            data: [],
            position: {
                lat: '59.405367',
                long: '18.672657'
            }
        };

        componentDidMount() {
            window.navigator.geolocation.getCurrentPosition(position =>
                this.setState(
                    {
                        position: {
                            long: position.coords.longitude,
                            lat: position.coords.latitude
                        }
                    },
                    () => {
                      this.generateApiUrlBasedOnPosition()
                    }
                )
            );
        }

        generateApiUrlBasedOnPosition() {
            const { lat, long } = this.state.position;
            this.setState(
                {
                    apiUrl: `${cors}${darkSkyUrl}${darkSkyKey}${lat},${long}`
                },
                () => {
                   this.apiFetch();
                }
            );
        }

        apiFetch = () => {
            fetch(this.state.apiUrl)
                .then(response => {
                    return response;
                })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        data
                    });
                })
                .catch(error => {
                    console.log('error');
                });
        };

        //..och sedan renderar den wrappade componenten med API-datan
        render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    };

export default withData;
