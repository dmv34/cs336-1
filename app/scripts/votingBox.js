
//external/local imports required by this module…
import React from 'react';
import $ from 'jquery';
import SquadronListA from './squadronListA';
import SquadronListB from './squadronListB';
import SquadronForm from './squadronForm';
import style from '../css/style.css';
import { API_URL, POST_URL, POLL_INTERVAL } from './global';
import { Router, Route, Redirect, browserHistory } from 'react-router';



//Made module.exports for all .js files
module.exports = React.createClass({
  loadSquadronFromServer: function() {
    $.ajax({
      url: API_URL,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleMatchupSubmit: function(matchup) {
    var SquadronNodes = this.props.data.map(function(squadron) {
      return (
        <Squadron squadron={squadron.squadron}>
        </Squadron>
      );
    });

  console.log(SquadronNodes);

    $.ajax({
    url: POST_URL,
    dataType: 'json',
    type: 'POST',
    data: matchup,
    success: function(data) {
      this.setState({data: data});
    }.bind(this),
    error: function(xhr, status, err) {
      this.setState({data: comments});
      console.error(API_URL, status, err.toString());
    }.bind(this)
  });
},
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadSquadronFromServer();
    setInterval(this.loadSquadronFromServer, POLL_INTERVAL);
  },
  render: function() {
      return (
        <div className={style.votingBox}>
        <SquadronListA data = {this.state.data}/>

        <SquadronForm onMatchupSubmit = {this.handleMatchupSubmit}/>
        </div>
        )
    }
});
