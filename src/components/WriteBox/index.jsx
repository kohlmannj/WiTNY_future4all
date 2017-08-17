import React, { Component } from 'react';
import cx from 'classnames';
import css from './WriteBox.css';

export default class WriteBox extends Component {
  static defaultProps = {
    delay: 4000,
  };

  state = {
    waiting: false,
    showWriting: false
  };

  toggleWriting() {
    console.log('Toggling writing...');
    if (this.state.showWriting === false) {
      this.setState({ waiting: true });

      setTimeout(() => {
        this.setState({
          waiting: false,
          showWriting: true,
        });
      }, this.props.delay);
    } else {
      this.setState({ showWriting: false });
    }
  }

  submitSuggestion() {
    window.alert('Thank you for submitting your feedback!');
  }

  render() {
    return (
      <div className="WriteBox__root">
        <div
          className={cx('WriteBox__box', {
            'WriteBox__box__wait': this.state.waiting,
            'WriteBox__box__withWriting': this.state.showWriting
          })}
          onClick={this.toggleWriting.bind(this)}
        />
        <button className="WriteBox__button" onClick={this.submitSuggestion.bind(this)}>Submit</button>
      </div>
    );
  }
}
