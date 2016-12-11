//This was split off because of Exercise 9.2

//external/local imports required by this module…
import React from 'react';
import $ from 'jquery';
import SquadronList from './squadronList';
import SquadronForm from './squadronForm';
import { API_URL, POLL_INTERVAL } from './global';


//Made module.exports for all .js files
module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadCommentsFromServer: function() {
        $.ajax({
            url: API_URL,
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(API_URL, status, errorThrown.toString());
         }.bind(this));
    },
    handleCommentSubmit: function(squadronItem) {
        var squadronItems = this.state.data;
        comment.id = Date.now();
        var newSquadronItem = squadronItem.concat([squadronItems]);
        this.setState({data: newSquadronItem});
        $.ajax({
            url: API_URL,
            dataType: 'json',
            type: 'POST',
            data: squadronItem,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             this.setState({data: squadronItems});
             console.error(API_URL, status, errorThrown.toString());
         }.bind(this));
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
	console.log(POLL_INTERVAL);
        setInterval(this.loadCommentsFromServer, POLL_INTERVAL);
    },
    render: function() {
        return (
          <div className="SquadronBox">
          <header>Meta or Not</header>
          <div id='main'>
          <app> 
              <SquadronList data={this.state.data} />
              <SquadronForm onCommentSubmit={this.handleCommentSubmit} />
          </app>
          <nav>
            <a href="https://www.youtube.com/watch?v=WNIPqafd4As">Good work</a>
          </nav>
        </div>
        <footer>By Logan and Drew</footer>
        </div>
        );
    }
});
