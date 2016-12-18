import React from 'react';
import style from '../css/style.css';
import { Link, IndexLink } from 'react-router'



module.exports = React.createClass({
  render: function() {
    return (
      <div clasName = {style.navBar}>
        <Link to = "/voting">Voting</Link>
        <Link to = "/results">Results</Link>
      </div>
    )
  }
});
