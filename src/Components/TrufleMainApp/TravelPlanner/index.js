import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import RoutePicker from "./RoutePicker";
import Map from "./Map";
import rozklad from "./data/rozklad.json";
import ztmStopsWithRoute from "./data/ztmStopsWithRoute.json";
import ztmStops from "./data/ztmStops.json";
import FacebookLogin from "react-facebook-login";
// import DateTimePicker from "./DateTimePicker";

const rozkladJazdy = rozklad.stopTimes.map(function (item) {
  return {
    routeId: item.routeId,
    arrivalTime: item.arrivalTime,
    stopId: item.stopId,
    stopSequence: item.stopSequence,
    tripId: item.tripId
  }
});
let ztmStopsMaped = ztmStops.stops.map(function (item) {
  return {
    stopId: item.stopId,
    stopDesc: item.stopDesc,
    stopLat: item.stopLat,
    stopLon: item.stopLon
  }
});
let przystankiZTrasy = [];

/********CLASS BEGIN************/
class TravelPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busStopsStart: {},
      busStopsEnd: {},
      busStopId: '',
      timeLine: '',
      routeLine: '',
      przystankiZTrasyCoDrugi: '',
      user: '',
      userPicture: ''
    }
  }

  getBusCoordinateStart = (busStopsStart) => {
    this.setState({busStopsStart: busStopsStart.value, busStopId: busStopsStart.value.stopId}, function () {
      this.timeLineRender(this.state.busStopId);
      this.routeLineRender(this.state.busStopId);
    })
  };
  getBusCoordinateEnd = (busStopsEnd) => {
    this.setState({busStopsEnd: busStopsEnd.value, przystankiZTrasyCoDrugi: []})
  };

  timeLineRender = (busStopId) => {
    console.log('busstopid from timeLineRender', busStopId);
    let timeLine = rozkladJazdy.filter(
      item => item.stopId === busStopId
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
    if (isNaN(busStopId)) {
      busStopId = this.state.busStopId;
    }
    let {timeLine} = this.state;
    let routeLine = rozkladJazdy.filter(
      item => item.stopId === busStopId
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
          <h3 className="panel-title">{item} <input type="button" value="Pokaż trasę" className="btn btn-info"
                                                    onClick={ () => this.showTripOnMap(busStopId, item)}
          /></h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {function () {
              console.log(timeLine);
              return timeLine.filter(element => element.routeId === item).map((elementmaped, indexmaped) =>
                <span key={indexmaped}
                      className="badge">{elementmaped.formattedArrivalTime}
                </span>
              )
            }()}
          </ul>
        </div>
      </div>);
    this.setState({routeLine: routeLine})
  };

  showTripOnMap = (busStopId, timeLine) => {
    const tripId = ztmStopsWithRoute.stopsInTrip.filter(item => item.stopId === busStopId && item.routeId === timeLine)[0].tripId;

    const przystankiZTrasyId = ztmStopsWithRoute.stopsInTrip
      .filter(item => item.tripId === tripId && item.routeId === timeLine)
      .sort(
        (a, b) => a.stopSequence - b.stopSequence
      )
      .map(item => item.stopId);

    let testujemy = function () {
      przystankiZTrasy = [];
      for (let i = 0; i < przystankiZTrasyId.length; i++) {
        let ztmStopsFromTrip = ztmStopsMaped.find(function (item) {
          return item.stopId === przystankiZTrasyId[i]
        });
        przystankiZTrasy.push(ztmStopsFromTrip)
      }
      console.log(przystankiZTrasy);
    };
    testujemy();
    this.setState({przystankiZTrasyCoDrugi: przystankiZTrasy.filter((element, index) => index % 2 === 0)})
  };

  /********FACEBOOK RESPONSE************/
  responseFacebook = (response) => {
    console.log(response);
    this.setState({user: response, userPicture: response.picture.data.url})
  };

  render() {
    const {busStopsStart, busStopsEnd, routeLine, przystankiZTrasyCoDrugi, user, userPicture} = this.state;
    const userNotLogged = (
      <div>
        <div style={{position: 'absolute', top: '50%', left: '50%', textAlign: 'center', transform: 'translate(-50%, -50%)'}}>
          <h1>Przemieszczaj się w 3City sprawniej</h1>
          <FacebookLogin
            appId="1679150892381438"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
            icon="fa-facebook"
          />
        </div>
      </div>
    );
    const userLogged = (
      <Row>
        <Col md={3}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Użytkownik: <strong>{user.name}</strong><img src={userPicture} alt="user" style={{borderRadius: '40px', marginLeft: '1em'}}/></h3>

            </div>
          </div>
          {/*<div className="panel panel-primary">*/}
          {/*<div className="panel-heading">*/}
          {/*<h3 className="panel-title">Czas:</h3>*/}
          {/*</div>*/}
          {/*<div className="panel-body">*/}
          {/*<DateTimePicker />*/}
          {/*</div>*/}
          {/*</div>*/}
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
          <Map busStopsStart={busStopsStart} busStopsEnd={busStopsEnd} przystankiZTrasy={przystankiZTrasyCoDrugi}/>
        </Col>
      </Row>
    );
    const dopokazania = user > '' ? userLogged : userNotLogged;

    const result = (
      <Grid fluid>
        {dopokazania}
      </Grid>
    );
    return result;
  }
}

export default TravelPlanner;