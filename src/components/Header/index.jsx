import React, { Component } from 'react';
import Link from 'gatsby-link';

function format_time(date_obj) {
  // formats a javascript Date object into a 12h AM/PM time string
  var hour = date_obj.getHours();
  var minute = date_obj.getMinutes();
  var amPM = (hour > 11) ? "pm" : "am";
  if (hour > 12) {
    hour -= 12;
  } else if (hour == 0) {
    hour = "12";
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  return hour + ":" + minute + amPM;
}

export default class Header extends Component {
  componentDidMount() {
    this.setTime();

    this.timeInterval = setInterval(this.setTime.bind(this), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  setTime() {
    const today = new Date();

    const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    const ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    const time = (today.getHours() % 12) + ":" + ("0" + today.getMinutes()).slice(-2) + ' ' + ampm;

    console.log(`The time is now ${time}.`);

    this.date.textContent = date;
    this.time.textContent = time;
  }

  render() {
    return (
      <div
        style={{
          background: 'rebeccapurple',
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 auto',
            color: '#fff',
            padding: '0 2em',
            height: '6em',
          }}
        >
          <h1
            style={{
              margin: 0,
              flex: '0 1 33.3333333333%',
            }
            }>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Sēn☆Taps
            </Link>
          </h1>
          <div
            className="header__welcome"
            style={{
              flex: '0 1 33.3333333333%',
              fontSize: '1.5em',
              lineHeight: '1.2em',
              textAlign: 'center'
            }
            }>
            Welcome to the Roosevelt Island Senior Center!
          </div>
          <div
            className="header__time"
            style={{
              flex: '0 1 33.3333333333%',
              fontSize: '1.5em',
              lineHeight: '1.2em',
              color: '#fff',
              textAlign: 'right'
            }}
          >
            <span ref={e => { this.date = e; }}></span>
            <br />
            <span ref={e => { this.time = e; }}></span>
          </div>
        </div>
      </div>
    );
  }
}
