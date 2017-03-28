import React, {Component} from 'react';
import {Grid, Row, Col} from "react-bootstrap"
import {Link} from 'react-router';

export class TrufleMainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const result = (
      <Grid>
        <Row>
          <Col md={12}>
            <h1>Main App</h1>
            <p>
              <Link to={"/main-app/rozklad-jazdy"}> Przegladaj Rozklad Jazdy </ Link>
              <Link to={"/main-app/travel-planner"}>Zaplanuj podróż</ Link>
            </p>
          </Col>
        </Row>
      </Grid>
    );
    return result;
  }
}