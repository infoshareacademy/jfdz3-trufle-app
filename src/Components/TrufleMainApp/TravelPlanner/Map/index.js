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
      origin: new global.google.maps.LatLng(54.403542, 18.569694),
      destination: new global.google.maps.LatLng(54.352028, 18.646629),
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
      if (status === global.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  };

  newLocalization = () => {
    const {busStopsStart, busStopsEnd} = this.props;
    this.setRoute(new global.google.maps.LatLng(busStopsStart.Lat, busStopsStart.Lon),
      new global.google.maps.LatLng(busStopsEnd.Lat, busStopsEnd.Lon));
  };

  render() {
    const {busStopsStart, busStopsEnd} = this.props;
    console.log('MapStart: ', busStopsStart, '; MapEnd: ', busStopsEnd);

    return (
      <div>
        <input type="button" onClick={this.newLocalization} value='Zatwierdź przystanki'/>
        <DirectionsExampleGoogleMap
          containerElement={
            <div style={{height: `1000px`}}/>
          }
          mapElement={
            <div style={{height: `100%`}}/>
          }
          center={this.state.origin}
          directions={this.state.directions}
          confirmRoute={this.newLocalization}
        />
      </div>
    );
  }
}
export default Map;