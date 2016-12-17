//This was split off because of Exercise 9.2

//external/local imports required by this module…
import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';
import SquadronItem from './squadronItem';
import style from '../css/style.css';

//Made module.exports for all .js files
module.exports = React.createClass({
  render:function() {
        return (
            <div className={style.squadronListB}>
                <p>Test</p>
            </div>
        );
    }
});
