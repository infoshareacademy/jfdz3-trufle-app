import React from 'react';
import {Button} from "react-bootstrap";

class RoutePicker extends React.Component{
  constructor(props){
    super(props);
    this.tate = {

    }
  }

  render(){
    const result = (
      <div>
        <div className="input-group">
          <input type="text" className="form-control" defaultValue="punkt startowy"/>
          <span className="input-group-btn">
                    <Button className="default date-range-toggle">
                      <i className="glyphicon glyphicon-play"/>
                    </Button>
                </span>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" defaultValue="cel podróży"/>
          <span className="input-group-btn">
                    <Button className="default date-range-toggle">
                      <i className="glyphicon glyphicon-map-marker"/>
                    </Button>
                </span>
        </div>
      </div>
    )
    return result;
  }
}

export default RoutePicker;