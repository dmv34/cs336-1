//external/local imports required by this module…
import React from 'react';
import navBar from "./navBar";
import style from '../css/style.css';


//Made module.exports for all .js files
module.exports = React.createClass({
    render: function() {
        return (
          <div className={style.mainWindow}>
            <navBar />
            {this.props.children}

          </div>
        );
    }
});
