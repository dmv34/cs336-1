//This was split off because of Exercise 9.2

//external/local imports required by this module…
import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';
import SquadronItem from './squadronItem';

//Made module.exports for all .js files
module.exports = React.createClass({
    render: function() {
        var squadronItemNodes = this.props.data.map(function(squadronItem) {
            return (
                <squadronItem id={squadronItem.id} author={squadronItem.author} key={squadronItem.id}>
                    {comment.text}
                </squadronItem>
            );
        });
        return (
            <div className="squadronList">
                {squadronItemNodes}
            </div>
        );
    }
});
