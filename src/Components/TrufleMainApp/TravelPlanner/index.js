import React from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import DateTimePicker from './DateTimePicker'
import RoutePicker from './RoutePicker';
// import ReactSelect from './ReactSelect';
import Map from './Map';
import axios from 'axios';

class TravelPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busStops: {},
    }
  }

  componentDidMount() {
    axios.get('http://infoshareacademy.getsandbox.com/trufle/users')
      .then(response => {
        this.setState({data: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  getBusCoordinate = (busStops)=>{
    this.setState({busStops: busStops})
  };

  render() {
    const {busStops} = this.state;

    const result = (
      <Grid fluid>
        <Row>
          <Col md={3}>
            <h2>Wybierz</h2>
            <DateTimePicker />
            <h3>Przystanki: </h3>
            <RoutePicker getBusCoordinate={this.getBusCoordinate}/>
            <RoutePicker getBusCoordinate={this.getBusCoordinate}/>
            {/*<ReactSelect/>*/}
          </Col>
          <Col md={9}>
            <h1>Main Screen</h1>
            <Map busStops={busStops} />
          </Col>
        </Row>
      </Grid>
    );
    return result;
  }
}

export default TravelPlanner;