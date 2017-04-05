import React from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import DateTimePicker from './DateTimePicker'
import RoutePicker from './RoutePicker';
import Map from './Map';
// import axios from 'axios';
import rozklad2 from './data/rozklad2.json'

const rozkladLinia2 = rozklad2.stopTimes.map(function (item) {
  return {
    routeId: item.routeId,
    arrivalTime: item.arrivalTime,
    stopId: item.stopId,
    stopSequence: item.stopSequence,
    tripId: item.tripId
  }
});

class TravelPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busStopsStart: {},
      busStopsEnd: {},
    }
  }

  // componentDidMount() {
  //   axios.get('http://87.98.237.99:88/stopTimes?date=2017-04-30&routeId=10')
  //     .then(response => {
  //       this.setState({data: response});
  //       console.log('rozkłąd jazdy: ', response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  getBusCoordinateStart = (busStopsStart) => {
    this.setState({busStopsStart: busStopsStart})
  };
  getBusCoordinateEnd = (busStopsEnd) => {
    this.setState({busStopsEnd: busStopsEnd})
  };

  // rozklad9999 = () => {
  //   rozkladStopID9999.forEach(function (item) {
  //     console.log(item.arrivalTime);
  //     lista = <li>{item.arrivalTime}</li>
  //   })
  // };
  rozkladStopID9999 = rozkladLinia2.filter(item => item.stopId == '9999').map((item, index) => {
    return (
      <li
        key={index}
      >
        {item.routeId} - {item.arrivalTime}
      </li>
    )
  });

  render() {
    const {busStopsStart, busStopsEnd} = this.state;
    console.log('Start: ', busStopsStart, '; End: ', busStopsEnd);

    const result = (
      <Grid fluid>
        <Row>
          <Col md={3}>
            <h2>Wybierz</h2>
            <DateTimePicker />
            <h3>Przystanki: </h3>
            <RoutePicker getBusCoordinateStart={this.getBusCoordinateStart}/>
            <RoutePicker getBusCoordinateEnd={this.getBusCoordinateEnd}/>
            <ul>
              {this.rozkladStopID9999}
            </ul>
          </Col>
          <Col md={9}>
            <h1>Main Screen</h1>
            <Map busStopsStart={busStopsStart} busStopsEnd={busStopsEnd}/>
          </Col>
        </Row>
      </Grid>
    );
    return result;
  }
}

export default TravelPlanner;