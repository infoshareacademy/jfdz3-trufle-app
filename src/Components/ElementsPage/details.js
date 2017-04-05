import React from 'react';
import {Col, Grid, Row, Menu} from 'react-bootstrap';
import './details.css';

class stronaDetails extends React.Component{
    render() {
        return(
            <Grid fluid>
                <Row className="show-grid">
                    <Col className="App_nav" xs={12} md={12}>
                        <Menu />
                    </Col>
                </Row>
                <div className="colorTitle"><p>Details</p></div>
                    <div className="colorDetalis">
                        <row className="show-grid">
                            <Col md ={6} >
                                <p><iframe width="390" height="220" src="https://www.youtube.com/embed/M9rYxYCaD9U">
                                </iframe></p>
                             </Col>
                             <Col md={6} >
                                <p><iframe width="390" height="220" src="https://www.youtube.com/embed/AE-Y50eT1-o">
                                </iframe></p>
                             </Col>
                         </row>
                        <row className="show-grid">
                            <Col md ={6} >
                                <p><iframe width="400" height="220" src="https://www.youtube.com/embed/sMzdCfCRFG4">
                                </iframe></p>
                             </Col>
                            <Col md={6} >
                                <p><iframe width="400" height="220" src="https://www.youtube.com/embed/6Fw6EMpkvQA">
                                </iframe></p>
                            </Col>
                         </row>
                    </div>
            </Grid>);
    }
}

export default stronaDetails;