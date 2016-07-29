import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/logo.svg';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <Link to="/"><img src={logo} className="Nav-logo" alt="logo" /></Link>
            </div>
            <div className="col-xs-8 Nav-login-container">
              <a href="">Login</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
