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
    // this.setRoute();
  }

  setRoute(origin, destination, przystankiZTrasy) {
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
      waypoints: przystankiZTrasy,
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
    const {busStopsStart, busStopsEnd, przystankiZTrasy} = this.props;
    if (przystankiZTrasy.length > 1){
      this.setRoute(new global.google.maps.LatLng(przystankiZTrasy[0].stopLat, przystankiZTrasy[0].stopLon),
        new global.google.maps.LatLng(przystankiZTrasy[przystankiZTrasy.length - 1].stopLat, przystankiZTrasy[przystankiZTrasy.length - 1].stopLon),
        przystankiZTrasy.map(function (item) {
        return {location: new global.google.maps.LatLng(item.stopLat, item.stopLon), stopover: true}
      }));
      // console.log('bez slice', przystankiZTrasy, 'slice', przystankiZTrasy.slice(4, -4).map(function (item) {
      //   return {location: new global.google.maps.LatLng(item.stopLat, item.stopLon), stopover: true}
      // }));
    }else {
      this.setRoute(new global.google.maps.LatLng(busStopsStart.Lat, busStopsStart.Lon),
        new global.google.maps.LatLng(busStopsEnd.Lat, busStopsEnd.Lon));
    }
  };

  render() {
    // const {busStopsStart, busStopsEnd, przystankiZTrasy} = this.props;
    // console.log('MapStart: ', busStopsStart, '; MapEnd: ', busStopsEnd, 'przystankiZTrasy', przystankiZTrasy);

    return (
      <div>
        <input className="btn btn-success" type="button" onClick={this.newLocalization} value='Zatwierdź przystanki'/>
        <DirectionsExampleGoogleMap
          containerElement={
            <div style={{height: `900px`}}/>
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