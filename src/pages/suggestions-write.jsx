import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import WriteBox from '../components/WriteBox';

export default class SuggestionsWrite extends Component {
  render() {
    return (
      <div className="suggestions__write">
        <h1 style={{
          textAlign: 'center',
          maxWidth: '50%',
          margin: '0.5em auto 0',
          fontSize: '4em'
        }}>Write your suggestion using the touchscreen.</h1>
        <WriteBox />
        <NavigationBar />
      </div>
    )
  }
}
