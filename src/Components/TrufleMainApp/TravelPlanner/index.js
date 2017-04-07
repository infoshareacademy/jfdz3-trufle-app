import React from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import DateTimePicker from './DateTimePicker'
import RoutePicker from './RoutePicker';
import Map from './Map';
// import axios from 'axios';
// import rozklad2 from './data/rozklad2.json'
import rozklad2 from './data/rozklad.json'

const rozkladLinia8 = rozklad2.stopTimes.map(function (item) {
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
      busStopId: '',
      timeLine: '',
      routeLine: '',
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
    this.setState({busStopsStart: busStopsStart.value, busStopId: busStopsStart.value.stopId}, function () {
      this.timeLineRender(this.state.busStopId);
      this.routeLineRender(this.state.busStopId);
    })
  };
  getBusCoordinateEnd = (busStopsEnd) => {
    this.setState({busStopsEnd: busStopsEnd.value})
  };

  timeLineRender = (busStopId) => {
    // console.log(busStopId);
    let timeLine = rozkladLinia8.filter(
      item => item.stopId === busStopId
      // item => item.stopId === this.state.busStopId
    ).map(
      item => {
        const arrivalTime = new Date(item.arrivalTime);

        return {
          ...item,
          arrivalTime,
          formattedArrivalTime: (
            ('0' + arrivalTime.getHours()).slice(-2) +
            ':' +
            ('0' + arrivalTime.getMinutes()).slice(-2)
          )
        }
      }
    ).sort(
      (a, b) => a.arrivalTime - b.arrivalTime
    ).map(
      (item, index) => (
        <li
          key={index}
          className="list-group-item"
        >
          {item.formattedArrivalTime}
          <span className="badge">Linia: {item.routeId}</span>
        </li>
      )
    );
    this.setState({timeLine: timeLine})
  };

  routeLineRender = (busStopId) => {
    let {timeLine} = this.state;
    console.log(timeLine);
    let routeLine = rozkladLinia8.filter(
      item => item.stopId === 9999
      // item => item.stopId === this.state.busStopId
    ).map(item => {
      return item.routeId
    }).filter(
      (value, index, self) => {
        return self.indexOf(value) === index;
      }
    );
    routeLine = routeLine.map(item =>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{item}</h3>
        </div>
        <div className="panel-body">
          12:30, 14:45....
        </div>
      </div>)
    // console.log('Timelinew', timeLine);
    this.setState({routeLine: routeLine})
  };

  render() {
    const {busStopsStart, busStopsEnd, timeLine, routeLine} = this.state;

    const result = (
      <Grid fluid>
        <Row>
          <Col md={3}>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Czas:</h3>
              </div>
              <div className="panel-body">
                <DateTimePicker />
              </div>
            </div>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Podróż:</h3>
              </div>
              <div className="panel-body">
                <RoutePicker getBusCoordinateStart={this.getBusCoordinateStart}/>
                <RoutePicker getBusCoordinateEnd={this.getBusCoordinateEnd}/>
              </div>
            </div>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Rozkład:</h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {timeLine}
                  {routeLine}
                </ul>
              </div>
            </div>
          </Col>
          <Col md={9}>
            <Map busStopsStart={busStopsStart} busStopsEnd={busStopsEnd}/>
          </Col>
        </Row>
      </Grid>
    );
    return result;
  }
}

export default TravelPlanner;