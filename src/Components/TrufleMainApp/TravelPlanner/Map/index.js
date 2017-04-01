import React from 'react';
import {GoogleMap, DirectionsRenderer, withGoogleMap}  from 'react-google-maps';

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions}/>}
  </GoogleMap>
));

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: new global.google.maps.LatLng(54.391313, 18.577561),
      destination: new global.google.maps.LatLng(54.378508, 18.600382),
      directions: null,
    };
  };

  componentDidUpdate() {
    const DirectionsService = new global.google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: global.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === global.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
        // console.log(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  };

  newLocalization = () =>{
    // const {origin, directions} = this.state;
    // console.log(origin, directions);
    this.setState({origin: new global.google.maps.LatLng(54.382952, 18.577526),
      destination: new global.google.maps.LatLng(54.403094, 18.569789)})
  };

  render() {
    // const {origin, directions} = this.state;
    // console.log('render ', origin, directions);
    // console.log(global.google.maps.DirectionsService);

    return (
      <div>
        <div onClick={this.newLocalization}>Mapa</div>
        <DirectionsExampleGoogleMap
          containerElement={
            <div style={{height: `1000px`}}/>
          }
          mapElement={
            <div style={{height: `100%`}}/>
          }
          center={this.state.origin}
          directions={this.state.directions}
        />
      </div>
    );
  }
}
export default Map;