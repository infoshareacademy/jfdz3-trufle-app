import React from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import DateTimePicker from './DateTimePicker'
import RoutePicker from './RoutePicker';
import Map from './Map';
// import axios from 'axios';
// import rozklad from './data/rozklad.json'
import rozklad from './data/rozklad.json'
import ztmStopsWithRoute from './data/ztmStopsWithRoute.json';
import ztmStops from './data/ztmStops.json';

const rozkladJazdy = rozklad.stopTimes.map(function (item) {
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
    let timeLine = rozkladJazdy.filter(
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
        item
      )
    );
    this.setState({timeLine: timeLine})
  };

  routeLineRender = (busStopId) => {
    let {timeLine} = this.state;
    console.log('routeLineRender log', timeLine);
    let routeLine = rozkladJazdy.filter(
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
          <ul className="list-group">
            {function () {
              return timeLine.filter(element => element.routeId === item).map((elementmaped, indexmaped) =>
                <span key={indexmaped}
                      className="badge">{elementmaped.formattedArrivalTime}
                </span>
              )
            }()}
          </ul>
        </div>
      </div>);
    // console.log('routeLineRender', timeLine);
    this.setState({routeLine: routeLine})
  };

  render() {
    const {busStopsStart, busStopsEnd, routeLine} = this.state;
    const ztmStopsWithRouteFiltered = ztmStopsWithRoute.stopsInTrip.filter(
      item => item.tripId === 11 && item.routeId === 207)
      .sort(
        (a, b) => a.stopSequence - b.stopSequence
      )
      .map(item => item.stopId);
    console.log('ztmStopsWithRoute', ztmStopsWithRouteFiltered);

    console.log('ztmStops', ztmStops.stops.filter(item=>item.stopId === 9999)); // TODO - przefiltrować ztmStops.stops przez ztmStopsWithRouteFiltered

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
                <h3 className="panel-title">
                  <input type="button" className="btn btn-info" value="Pokaż rozkład"
                         onClick={this.routeLineRender}/>
                </h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
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