
import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css/style.css';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import mainWindow from './mainWindow';
import resultsBox from './resultsBox';
import votingBox from './votingBox';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={votingBox}/>
    <Route path="/voting" compontent={votingBox}/>
    <Route path="/results" component={resultsBox}/>
  </Router>
), document.getElementById('content'));
