/**
 * Lab06
 * @author Loganvp
 *
 * Exercise 6.1
 * a. I was able to use chrome to test the post method.
 *    I used the curl [--head] localhost:3000 command and it worked.
 *
 * b. The most appropriate is 404 not found. This is the most commonly understood and followed http-code.
 *
 * Exercise 6.2
 * a. Http methods supported are the get, head, put, post, and delete.
 *
 *
 * b. The form sends it back in json codex synax. Its not modified.
 *
 */

const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use('/forms', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//This is for the homepage
app.get('/', function (req, res) {
  res.send('This is the Home!');
});

//Opens the forms web page
app.get('/forms', function (req, res) {
  res.render('index');
});

//Get
app.get('/request', function (req, res) {
  res.sendStatus(200);
  res.send("What's the request?");
});


//Head
app.head('/request', function (req, res) {
  res.sendStatus(200);
  res.send("Head request.");
});

//Put
app.put('/request', function (req, res) {
  res.sendStatus(200);
  res.send('Got a PUT request.');
});

//Post
app.post('/forms', function (req, res) {
  res.send('Got a POST request. | ' + 'Name <code>' + req.body.user_name + '</code> | Message <code>' + req.body.user_message + '</code>');
});

//Delete
app.delete('/request', function (req, res) {
  res.sendStatus(200);
  res.send('Got a DELETE request.');
});

//This was my optional way of sending the 500 code for all unidentified requests
// app.use(function (req, res, next) {
//   res.sendStatus(500);
// });

//Sends error 500 if there is an incorrect route entered
app.all('*', function(req, res) {
	res.sendStatus(500);
});

//tells us it is running.
app.listen(port, function() {
    console.log('Listening on port ' + app.get('port') + '...');
});
