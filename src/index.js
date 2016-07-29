import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Outfit from './components/Outfit';
import './css/index.css';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/get-started" component={Outfit} />
      </Route>
    </Router>
  ), document.getElementById('root')
);
