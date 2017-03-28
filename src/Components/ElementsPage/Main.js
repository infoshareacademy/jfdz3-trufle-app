import React from 'react';
import './Main.css';
import {Col, Image} from 'react-bootstrap';
import details from'./images/Details1.png';
import tram from'./images/tram_city.png';

class Detalis extends React.Component{
    render() {
    return(
    <div>
           <div className="colorTitle"></div>
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
</div>
);

};
}


export default Detalis;
