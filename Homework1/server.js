const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

// route code here...

app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port') + '!');
});
