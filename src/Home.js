import React, { Component } from 'react';
import { Link } from 'react-router'

import IntroSection from './components/home/IntroSection.js'

import icon from './images/icon.png';
import renewal from './images/renewal.png';
import timeless from './images/timeless.png';
import recyclable from './images/recyclable.png';
import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 Home-logo-container">
                <img src={icon} className="Home-icon" alt="logo" />
              </div>
              <div className="col-sm-7 Home-title-container">
                <h1>Generic Kit</h1>
                <p>The renewable wardrobe service</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 Home-get-started-container">
                <Link className="Home-get-started" to="/get-started">Get started</Link>
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

export default Home;
