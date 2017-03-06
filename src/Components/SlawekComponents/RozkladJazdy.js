import React, {Component} from 'react';
import {Grid, Row, Col} from "react-bootstrap"

export class RozkladJazdy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const result = (
            <Grid>
                <Row>
                    <Col md={8}>
                        <h1>Rozklad Jazdy!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at cum, dicta
                            eius et fugit illo in, ipsum itaque maiores modi nam quam quis ratione repellendus rerum
                            soluta ullam.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h1>Prawy Ekran</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at cum, dicta
                            eius et fugit illo in, ipsum itaque maiores modi nam quam quis ratione repellendus rerum
                            soluta ullam.
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
        return result;
    }
}

