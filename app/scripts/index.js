import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import style from '../css/style.css';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';

import mainWindow from './mainWindow';
import resultsBox from './resultsBox';
import votingBox from './votingBox';
import initialPage from './initialPage';
import navBar from './navBar';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path = "/" compontent= {mainWindow}>
      <IndexRoute component={initialPage} />
      <Route path="/voting" compontent={votingBox}/>
      <Route path="/results" component={resultsBox}/>
    </Route>
  </Router>
), document.getElementById('content'));
