import React from 'react';
import NavigationBar from '../components/NavigationBar';
import communityPage from '../rob/community.html';

const SuggestionsSpeak = () => (
  <div className="suggestions__community">
    <iframe className="iframe-fullscreen" srcDoc={communityPage} />
    <NavigationBar />
  </div>
);

export default SuggestionsSpeak;
