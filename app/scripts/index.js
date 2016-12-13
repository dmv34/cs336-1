
import React from 'react';
import ReactDOM from 'react-dom';
import SquadronBox from './squadronBox';
import SquadronEdit from './squadronEdit';
import '../css/base.css';
import { Router, Route, Redirect, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={SquadronBox}></Route>
    <Route path="/:id" component={SquadronEdit}></Route>
  </Router>
  ),document.getElementById('content')
);

  
