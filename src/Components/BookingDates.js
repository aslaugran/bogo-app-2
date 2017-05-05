import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';


export default class BookingDates extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toDay: moment().add(1, "day"),
      maxDay: moment().add(90, "day"),
      startDate: moment().add(1, "day")
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
  this.setState({
    startDate: date
  });
}

render() {
  return <DatePicker
    inline
    selected={this.state.startDate}
    onChange={this.handleChange}
    maxDate={this.state.maxDay}
    minDate={this.state.toDay}
/>;
}
}
