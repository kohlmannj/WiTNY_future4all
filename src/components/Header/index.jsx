import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class Header extends Component {
  componentDidMount() {
    const currentdate = new Date();
    const datetime = currentdate.getDay() + "/" + currentdate.getMonth()
      + "/" + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    this.time.textContent = datetime;
  }

  render() {
    return (
      <div
        style={{
          background: 'rebeccapurple'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            margin: '0 auto',
            color: '#fff',
            padding: '2em',
          }}
        >
          <h1 style={{ margin: 0 }}>
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
          <div className="header__welcome" style={{ fontSize: '2em', lineHeight: '1em' }}>Welcome to the Roosevelt Island Senior Center</div>
          <div className="header__time" style={{
            float: 'right',
            fontSize: '2em',
            lineHeight: '1em',
            color: '#fff',
          }} ref={e => { this.time = e; }} />
        </div>
      </div>
    );
  }
}
