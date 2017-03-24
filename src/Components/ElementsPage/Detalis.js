import React from 'react';
import './Detalis.css';
import {Col, Image} from 'react-bootstrap';
import details from'./images/Details1.png';
import tram from'./images/tram_city.png';

class Detalis extends React.Component{
    render() {
    return(
        <div>
           <div className="colorTitle"><p>Functions</p></div>
        <div className="colorFunctions">
            <row className="show-grid">
                <Col md ={3} className="buttonDetails" id="keyOne">
                    <div><p><Image src="/assets/thumbnail.png" responsive /></p></div>
                </Col>
                <Col md ={3} className="buttonDetails" id="keyTwo">
                    <div> <p> <Image src="/assets/thumbnail.png" responsive /></p></div>
                </Col>
                <Col md ={3} className="buttonDetails" id="keyThree">
                    <div> <p><Image src={details} responsive /></p></div>
                </Col>
                <Col md ={3}  className="buttonDetails" id="keyFour">
                    <div> <p><Image src={tram} responsive /></p></div>
                </Col>
            </row>
        </div>
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
        </div>
        );

 };
}


export default Detalis;
