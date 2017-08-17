import React from 'react';
import NavigationBar from '../components/NavigationBar';
import lunch from '../images/lunch.png';

const SuggestionsSpeak = () => (
  <div className="suggestions__speak">
    <img className="image-fullscreen" src={lunch} alt="" />
    <NavigationBar />
  </div>
);

export default SuggestionsSpeak;
