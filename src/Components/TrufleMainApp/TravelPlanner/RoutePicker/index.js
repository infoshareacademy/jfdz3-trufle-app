import React from 'react';
import Select from 'react-select';
import ztmStops from '../data/ztmStops.json';

const ztmBusStops = ztmStops.stops.map(function (item) {
  return {
    value: {stopId: item.stopId, Lat: item.stopLat, Lon: item.stopLon},
    label: item.stopCode + ' ' + item.stopDesc
  }
});

class RoutePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      label: 'wybierz przystanek',
      clearable: false,
    }
  }

  updateValue = (newValue) => {
    const {getBusCoordinateStart, getBusCoordinateEnd} = this.props;
    this.setState({
      label: newValue.label,
      value: newValue.value,
    });
    console.log('newValue', newValue);
    // console.log(typeof getBusCoordinateEnd, typeof getBusCoordinateStart);
    if (typeof getBusCoordinateEnd === 'function') {
      getBusCoordinateEnd(newValue);
    }
    if (typeof getBusCoordinateStart === 'function') {
      getBusCoordinateStart(newValue);
    }
  };

  render() {
    // const {value} = this.state;
    // const {getBusCoordinate} = this.props;
    // console.log(getBusCoordinate);
    // console.log('ztmBusStops', ztmStops.stops);
    const result = (
      <div>
        <Select
          name="form-field-name"
          options={ztmBusStops}
          value={this.state}
          onChange={this.updateValue}
          clearable={this.state.clearable}
        />
      </div>
    );
    return result
  }
}
export default RoutePicker;