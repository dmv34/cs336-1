import React from 'react'
import style from '../css/style.css'

import votingBox from './votingBox';
import resultsBox from './resultsBox';


module.exports = React.createClass({
  render: function() {
    return (
      <div className={style.initialPage}>

        <votingBox />
        <resultsBox />
      </div>
    );
  }
});
