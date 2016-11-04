//This was split off because of Exercise 9.2

//external/local imports required by this module…
import React from 'react';
import Remarkable from 'remarkable';

//Made module.exports for all .js files
module.exports = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable({html: true});
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor" >
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});
