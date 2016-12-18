//This was split off because of Exercise 9.2

//Sliders will be difficult https://github.com/whoisandie/react-rangeslider

//external/local imports required by this module…
import React from 'react';
import $ from 'jquery';
import style from '../css/style.css';


//Made module.exports for all .js files
module.exports = React.createClass({
    render: function() {
        return (
            <form className="SquadronForm" onSubmit={this.handleSubmit}>
                <input className="ui-widget ui-corner-all" type="number" placeholder='50'
                />
                <input className="ui-widget ui-corner-all" type="number" placeholder='50'
                />
                <input className="ui-button ui-widget ui-corner-all" type="submit" value="Post" />
            </form>
        );
    }
});
