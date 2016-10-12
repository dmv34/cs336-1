/**
 * Lab06
 * @author Loganvp
 */

const express = require('express')
const app = express();
const port = 3000;

app.use('/forms', express.static('public'));

//This is for the homepage
app.get('/', function (req, res) {
  res.sendStatus(200);
  res.send('This is the Home!');
});

//Opens the forms web page
app.get('/forms', function (req, res) {
  if(index == null) {
    res.sendStatus(404);
  } else {
  res.render('index');
}
});

//Get
app.get('/request', function (req, res) {
  res.send("What's the request?");
});


//Head
app.head('/request', function (req, res) {
  res.send("Head request.");
});

//Put
app.put('/request', function (req, res) {
  res.send('Got a PUT request.');
});

//Post
app.post('/forms', function (req, res) {
  res.send('Got a POST request.');
});

//Delete
app.delete('/request', function (req, res) {
  res.send('Got a DELETE request.');
});

//Sends 404 not found if there is an incorrect route entered
app.use(function (req, res, next) {
  res.sendStatus(500);
});

//tells us it is running.
app.listen(port, function() {
    console.log('Listening on port ' + app.get('port') + '...');
});
