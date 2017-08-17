import React from 'react';
import NavigationBar from '../components/NavigationBar';
import speakPage from '../rob/speak.html';

const SuggestionsSpeak = () => (
  <div className="suggestions__speak">
    <iframe className="iframe-fullscreen" srcDoc={speakPage} />
    <NavigationBar />
  </div>
);

export default SuggestionsSpeak;
