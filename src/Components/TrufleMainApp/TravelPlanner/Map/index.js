import React from "react";
import {GoogleMap, DirectionsRenderer, withGoogleMap} from "react-google-maps";

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

  componentDidMount() {
    this.setRoute();
  }

  setRoute(origin, destination) {
    const DirectionsService = new global.google.maps.DirectionsService();
    if (origin && destination) {
      this.setState({
        origin: origin,
        destination: destination
      })
    } else {
      origin = this.state.origin;
      destination = this.state.destination;
    }

    DirectionsService.route({
      origin: origin,
      destination: destination,
      // waypoints: [{
      //   location: new global.google.maps.LatLng(54.404790, 18.612910),
      //   stopover: true
      // }],
      travelMode: global.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      // console.log(status, global.google.maps.DirectionsStatus);
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

  newLocalization = () => {
    // const {origin, directions} = this.state;
    // console.log(origin, directions);
    const {busStops} = this.props;
    this.setRoute(new global.google.maps.LatLng(busStops.Lat, busStops.Lon), new global.google.maps.LatLng(busStops.Lat, busStops.Lon)); //TODO - umożliwić wybranie dwóch róznych punktów
  };
  // newLocalization2 = () => {
  //   // const {origin, directions} = this.state;
  //   // console.log(origin, directions);
  //   this.setRoute(new global.google.maps.LatLng(54.404790, 18.612910), new global.google.maps.LatLng(54.379249, 18.618954));
  // };

  render() {
    // const {origin, directions} = this.state;
    // console.log('render ', origin, directions);
    // console.log(global.google.maps.DirectionsService);
    const {busStops} = this.props;
    console.log('hahahah',busStops);

    return (
      <div>
        <input type="button" onClick={this.newLocalization} value='Zatwierdź przystanki' />
        {/*<div onClick={this.newLocalization2}>Mapa2</div>*/}
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