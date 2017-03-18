import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Menu from './Components/ElementsPage/Menu.js';
import Sliders from './Components/ElementsPage/Sliders.js';
import Detalis from './Components/ElementsPage/Detalis.js';
import Footer from './Components/ElementsPage/Footer.js';

    class App extends Component {

        render() {
            return (
                <Grid>
                    <Row className="show-grid">
                        <Col className="App_nav" xs={12} md={12}>
                            <Menu />
                        </Col>
                    </Row>
                    <Row className="show-grid App-change">
                        <Sliders />
                    </Row>
                    <Row className="#">
                        <Detalis />
                    </Row>
                    <Row className="#">
                        <Footer />
                    </Row>
                </Grid>
            );
        }
    }

export default App;
