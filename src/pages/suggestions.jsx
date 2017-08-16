import React, { Component } from 'react';
import Link from 'gatsby-link';
import NavigationBar from '../components/NavigationBar';
import writeIcon from '../images/noun_1147014_cc.png';
import speakIcon from '../images/noun_1016115_cc.png';
import css from './suggestions.css';

export default class Suggestions extends Component {
  render() {
    return (
      <div className="page__suggestions">
        <h1 style={{
          textAlign: 'center',
          maxWidth: '50%',
          margin: '4% auto 0',
          fontSize: '4em'
        }}>How would you like to share your suggestions?</h1>

        <div className="NavigationBar NavigationBar__home suggestions__options">
          <Link className="NavigationBar__link" to="/suggestions-write">
            <img src={writeIcon} alt="" />
            <span>Write</span>
          </Link>
          <Link className="NavigationBar__link" to="/suggestions-speak">
            <img src={speakIcon} alt="" />
            <span>Speak</span>
          </Link>
        </div>

        <NavigationBar />
      </div>
    )
  }
}