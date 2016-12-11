//This was split off because of Exercise 9.2

//Sliders will be difficult https://github.com/whoisandie/react-rangeslider

//external/local imports required by this module…
import React from 'react';
import $ from 'jquery';

//Made module.exports for all .js files
module.exports = React.createClass({
    getInitialState: function() {
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    },
    render: function() {
        return (
            <form className="SquadronForm" onSubmit={this.handleSubmit}>
                <input className="ui-widget ui-corner-all" type="number" placeholder='50'
                       value={this.state.author} onChange={this.handleAuthorChange}
                />
                <input className="ui-widget ui-corner-all" type="number" placeholder='50'
                       value={this.state.text} onChange={this.handleTextChange}
                />
                <input className="ui-button ui-widget ui-corner-all" type="submit" value="Post" />
            </form>
        );
    }
});
