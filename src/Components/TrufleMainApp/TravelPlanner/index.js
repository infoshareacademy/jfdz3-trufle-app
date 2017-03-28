import React from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import DateTimePicker from './DateTimePicker'
import RoutePicker from './RoutePicker';

class TravelPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const result = (
      <Grid>
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
          </Col>
        </Row>
      </Grid>
    );
    return result;
  }
}

export default TravelPlanner;