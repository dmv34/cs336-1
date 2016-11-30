//This was split off because of Exercise 9.2

//external/local imports required by this module…
import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';
import Comment from './comment';

//Made module.exports for all .js files
module.exports = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment id={comment.id} author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});
