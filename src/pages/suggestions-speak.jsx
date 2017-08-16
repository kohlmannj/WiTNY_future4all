import React from 'react';
import NavigationBar from '../components/NavigationBar';

const SuggestionsSpeak = () => (
  <div className="suggestions__speak">
    <iframe className="iframe-fullscreen" src={'../static/speak.html'} />
    <NavigationBar />
  </div>
);

export default SuggestionsSpeak;
