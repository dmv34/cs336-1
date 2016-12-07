
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentBox';
import CommentEdit from './commentEdit';
import '../css/base.css';
import { Router, Route, Redirect, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={CommentBox}></Route>
    <Route path="/:id" component={CommentEdit}></Route>
  </Router>
  ),document.getElementById('content')
);
