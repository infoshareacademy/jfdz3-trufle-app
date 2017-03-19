import React from 'react';
import './Detalis.css';
import {Row, Col} from 'react-bootstrap';

class Detalis extends React.Component{
    render() {
    return(
        <div>
           <div className="colorTitle"><p>Functions</p></div>
        <div className="colorFunctions">
            <row className="show-grid">
                <Col md ={12} >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce lectus lacus, vestibulum non ligula a, elementum lobortis justo.
                        Integer aliquet orci pharetra finibus tempor. Nunc vel est condimentum, maximus tellus ut, gravida tellus.
                        Curabitur egestas mauris eu ex aliquet, iaculis posuere odio lobortis.
                        Donec pulvinar orci ex, sit amet porttitor sapien cursus sed. Integer a pulvinar nulla.
                        Suspendisse in enim purus.</p>
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
