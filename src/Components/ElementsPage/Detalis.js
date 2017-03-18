import React from 'react';
import './Detalis.css';
import {Row, Col} from 'react-bootstrap';

class Detalis extends React.Component{
    render() {
    return(
        <div className="colorDetalis">
        <Row className="show-grid">
        <Col md ={6} >
           <p><iframe width="400" height="220" src="https://www.youtube.com/embed/M9rYxYCaD9U">
           </iframe></p>
        </Col>
        <Col md={6} >
            <p><iframe width="400" height="220" src="https://www.youtube.com/embed/AE-Y50eT1-o">
            </iframe></p>
        </Col>
        </Row>
        <Row className="show-grid">
            <Col md ={6} >
            <p><iframe width="400" height="220" src="https://www.youtube.com/embed/M9rYxYCaD9U">
            </iframe></p>
            </Col>
            <Col md={6} >
            <p><iframe width="400" height="220" src="https://www.youtube.com/embed/AE-Y50eT1-o">
            </iframe></p>
            </Col>
       </Row>
     </div>);

 };
}


export default Detalis;
