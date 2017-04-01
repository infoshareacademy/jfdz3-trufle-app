import React from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import DateTimePicker from './DateTimePicker'
import RoutePicker from './RoutePicker';
import axios from 'axios';
import Map from './Map';

class TravelPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  createUser() {
    axios.post('http://infoshareacademy.getsandbox.com/trufle/data/bus', {
      id:1,
      type: 'bus',
      start: 7,
      end: 8,
    })
      .then(response => {
        console.log(response);
      })
  }

  user(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  render() {
    // this.createUser();

    // const {data} = this.state;
    // console.log(data);

    const result = (
      <Grid fluid>
        <Row>
          <Col md={3}>
            <h2>Wybierz</h2>
            <h3>Kiedy:</h3>
            <DateTimePicker />
            <h3>Gdzie:</h3>
            <RoutePicker/>
          </Col>
          <Col md={9}>
            <h1>Main Screen</h1>
            <Map/>
          </Col>
        </Row>
      </Grid>
    );
    return result;
  }
}

export default TravelPlanner;