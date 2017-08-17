import React from 'react';
import NavigationBar from '../components/NavigationBar';
import events from '../images/calendar.png';

const SuggestionsSpeak = () => (
  <div className="suggestions__speak">
    <img className="image-fullscreen" src={events} alt="" />
    <NavigationBar />
  </div>
);

export default SuggestionsSpeak;
