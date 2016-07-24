import React, { Component } from 'react';
import icon from './images/icon.png';
import logo from './images/logo.svg';
import './css/App.css';
import IntroSection from './IntroSection.js'
import renewal from './images/renewal.png';
import timeless from './images/timeless.png';
import recyclable from './images/recyclable.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <div className="container">
            <div className="row">
              <div className="col-xs-4">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col-xs-8 App-login-container">
                <a href="">Login</a>
              </div>
            </div>
          </div>
        </nav>
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 App-logo-container">
                <img src={icon} className="App-icon" alt="logo" />
              </div>
              <div className="col-sm-7 App-title-container">
                <h1>Generic Kit</h1>
                <p>The renewable wardrobe service</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 App-get-started-container">
                <a className="App-get-started" href="#">Get started</a>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <h2>Our service</h2>
          <div className="row">
            <div className="col-md-6">
              <IntroSection icon={renewal} title="Renewable">Your favourite outfit is worn out. Worry not! Subscribe to the set of clothes you love and we will renew them periodically or on-demand.</IntroSection>
            </div>
            <div className="col-md-6">
              <IntroSection icon={timeless} title="Timeless">Once we start selling an item, it’s there  forever. If you want to wear the same t-shirt for the next 10 years, you can! We won’t remove it from our stock just because a fashion guru said it isn’t trendy anymore</IntroSection>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IntroSection icon={recyclable} title="Recyclable">Send your old clothes back to us and we will give you discount on your next order.</IntroSection>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
