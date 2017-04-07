import React from 'react';
import {Button} from "react-bootstrap";
import 'react-bootstrap-datetimepicker-noicon/css/bootstrap-datetimepicker.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.handleApply = this.handleApply.bind(this);

    this.state = {
      startDate: moment(),
      endDate: moment(),
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      },
    };
  }

  handleApply(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
    const hour = picker.startDate.hour();
    const minute = picker.startDate.minute();
    const year = picker.startDate.year();
    const month = picker.startDate.month();
    const day = picker.startDate.date();
    const pickedDateTime = (year+'-'+(month+1)+'-'+day+' '+hour+':'+minute);
    console.log(pickedDateTime);
  }

  render() {
    let start = this.state.startDate.format('YYYY-MM-DD HH:mm');
    let end = this.state.endDate.format('YYYY-MM-DD HH:mm:ss');
    let label = start;
    if (start === end) {
      label = start;
    }

    let locale = {
      format: 'YYYY-MM-DD HH:mm:ss',
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek(),
    };

    return (
      <div className="form-group">
        <div>
          <DatetimeRangePicker
            timePicker
            timePicker24Hour
            showDropdowns
            // timePickerSeconds
            locale={locale}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onApply={this.handleApply}
            singleDatePicker={true}
          >
            <div className="input-group">
              <input type="text" className="form-control" value={label} onChange={function () {
                console.log('test');
              }}/>
              <span className="input-group-btn">
                    <Button className="default date-range-toggle">
                      <i className="glyphicon glyphicon-calendar"/>
                    </Button>
                </span>
            </div>
          </DatetimeRangePicker>
        </div>
      </div>
    );
  }
}

export default DateTimePicker;