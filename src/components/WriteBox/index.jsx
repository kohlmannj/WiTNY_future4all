import React, { Component } from 'react';
import cx from 'classnames';
import css from './WriteBox.css';

export default class WriteBox extends Component {
  static defaultProps = {
    delay: 3000,
  };

  state = {
    showWriting: false
  };

  toggleWriting() {
    console.log('Toggling writing...');
    if (this.state.showWriting === false) {
      setTimeout(() => {
        this.setState({ showWriting: !this.state.showWriting });
      }, this.props.delay);
    } else {
      this.setState({ showWriting: !this.state.showWriting });
    }
  }

  submitSuggestion() {
    window.alert('Thank you for submitting your feedback!');
  }

  render() {
    return (
      <div className="WriteBox__root">
        <div
          className={cx('WriteBox__box', { 'WriteBox__box__withWriting': this.state.showWriting })}
          onClick={this.toggleWriting.bind(this)}
        />
        <button className="WriteBox__button" onClick={this.submitSuggestion.bind(this)}>Submit</button>
      </div>
    );
  }
}
