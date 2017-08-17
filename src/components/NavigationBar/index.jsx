import React from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';
import css from './NavigationBar.css';
import homeIcon from '../../images/home.png';
import eventsIcon from '../../images/noun_906011_cc.png';
import sharesIcon from '../../images/noun_1077714_cc.png';
import lunchIcon from '../../images/noun_1044008_cc.png';
import suggestionsIcon from '../../images/noun_420177_cc.png';
import volumeIcon from '../../images/noun_1161362_cc.png';
import languageIcon from '../../images/noun_1049_cc.png';

const NavigationBar = ({ isHome }) => (
  <div className={cx('NavigationBar', { 'NavigationBar__home': isHome })}>
    {!isHome && <Link className="NavigationBar__button" to="/"><img src={homeIcon} alt="Back to Home" /></Link>}
    <Link className={cx('NavigationBar__link', 'events')} to="/events/" style={{ backgroundColor: 'crimson' }}>
      <img src={eventsIcon} alt="" />
      <span>Events</span>
    </Link>
    <Link className={cx('NavigationBar__link', 'lunch')} to="/lunch/" style={{ backgroundColor: 'orange' }}>
      <img src={lunchIcon} alt="" />
      <span>Weekly Lunch</span>
    </Link>
    <Link className={cx('NavigationBar__link', 'community')} to="/community/" style={{ backgroundColor: 'skyblue' }}>
      <img src={sharesIcon} />
      <span>Community Share</span>
    </Link>
    <Link className={cx('NavigationBar__link', 'suggestions')} to="/suggestions/" style={{ backgroundColor: '#8855bb' }}>
      <img src={suggestionsIcon} alt="" />
      <span>Suggestions</span>
    </Link>
    {!isHome && <button className="NavigationBar__button" onClick={() => { window.alert('Change the audio volume level. (Coming soon!)'); }}><img src={volumeIcon} alt="Volume Level" /></button>}
    {!isHome && <button className="NavigationBar__button" onClick={() => { window.alert('Change the displayed and spoken languge. (Coming soon!)'); }}><img src={languageIcon} alt="Choose Language" /></button>}
  </div>
);

NavigationBar.defaultProps = {
  isHome: false
};

export default NavigationBar;
