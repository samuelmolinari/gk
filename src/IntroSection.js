import React, { Component } from 'react';
import './css/App.css';

class IntroSection extends Component {
  render() {
    return (
      <div className="App-section">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <h3 className="hidden-xs hidden-sm">{this.props.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 App-section-header">
            <img src={this.props.icon} className="App-section-icon" alt="logo" />
            <h3 className="visible-xs visible-sm">{this.props.title}</h3>
          </div>
          <div className="col-md-9">
            <p>{this.props.children}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroSection;
