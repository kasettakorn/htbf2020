import React, { Component } from "react";
import "./Countdown.css";
import moment from "moment";
import "moment/locale/th";

moment.locale("th");
const timeObject = moment("230000", "hmmss").toObject();

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 4,
      hours: timeObject.hours - moment().hour() - 1,
      minutes: 60 - moment().minutes(),
      seconds: 60 - moment().seconds(),
    };
    this.timer = this.timer.bind(this);
  }
  timer() {
    this.setState({
      seconds: this.state.seconds - 1,
    });
    if (this.state.seconds < 0) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 59,
      });
    }
    if (this.state.minutes < 0) {
      this.setState({
        hours: this.state.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.timer();
    }, 1000);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="container">
        <div className="countdownCurfew">
          <div className="timer timer_highlight">
            <div className="days">{days}</div>
            <div className="label">Days</div>
          </div>
          <div className="timer">
            <div className="hours">{hours}</div>
            <div className="label">Hours</div>
          </div>
          <div className="timer">
            <div className="minutes">{minutes}</div>
            <div className="label">Minutes</div>
          </div>
          <div className="timer">
            <div className="seconds">{seconds}</div>
            <div className="label">Seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
