/*
*   @author: Logan VanProyen
*   @version: Fall 2016, CS336
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var idCounter = 5;

//based on things from this page: http://expressjs.com/en/api.html
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

//this is the person objects
function Person(id, firstName, lastName, hireDate) {
	this.id = id;
  this.firstName = firstName;
	this.lastName = lastName;
	this.hireDate = hireDate;
}

//root route that gives hello world
app.get('/', function (req, res) {
  res.send('<a href="newPerson.html">New Person</a> <br> <a href="getPerson.html">Get Person</a>');
});

//returns the list of people if /people is called
app.get('/people', function (req, res) {
  res.json(peopleList);
});

//gets the body from the form that posted the info
app.post('/person/', function(req, res) {
  //adds to the counter to increment ids
  var setID = idCounter++;
  var newPerson = new Person(setID, req.body.firstName, req.body.lastName, req.body.hireDate);
  peopleList.push(newPerson);
  res.json(peopleList);
});

//gets the specific id of a person
app.get('/person/:id', function (req, res) {
  for (var i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == req.params.id) {
      res.json(peopleList[i]);
    }
  }
  res.sendStatus(404);
});

//puts a user by the specified id
app.put('/person/:id', function(req, res) {
  for (var i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == req.params.id) {
        peopleList[i].firstName = req.body.firstName;
        peopleList[i].lastName  = req.body.lastName;
        peopleList[i].hireDate  = req.body.hireDate;
    }
	}
  res.sendStatus(404);
});

//deletes a user by id
app.delete('/person/:id', function(req, res) {
  for (var i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == req.params.id) {
        delete peopleObjects[i];
    }
	}
  res.sendStatus(404);
});

//gets the lastName and firstName of the named person
app.get('/person/:id/name', function (req, res) {
  for (var i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == req.params.id) {
        res.json(peopleList[i].firstName + " " + peopleList[i].lastName);
    }
	}
  res.sendStatus(404);
});

//shows the years
app.get('/person/:id/years', function (req, res) {
  for (var i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == req.params.id) {
      res.json({ "Anniversary" : getTime(peopleList[i].hireDate)});
    }
  }
  res.sendStatus(404);
});

//age function
function getTime(dateString) {
    var today = new Date();
    var hireDate = new Date(dateString);
    var years = today.getFullYear() - hireDate.getFullYear();
    var m = today.getMonth() - hireDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < hireDate.getDate())) {
        years--;
    }
    return years;
}

//opens the webpage to add a person
app.post('/add', function(req, res) {
  res.sendFile(__dirname+'/public/newPerson.html');
});

//opens the webpage to find a person
app.post('/find', function(req, res) {
  res.sendFile(__dirname+'/public/getPerson.html');
});


//console log to tell what port it is listening on
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

//These add default users to the person object
var pOne    = new Person(1, "Logan"   , "VanProyen" , "06/12/1994");
var pTwo    = new Person(2, "Barack"  , "Obama"     , "01/20/2009");
var pThree  = new Person(3, "Michael" , "LeRoy"     , "03/12/2013");
var pFour   = new Person(4, "Calvin"  , "College"   , "11/01/2016");

//add people to the array
var peopleList = [pOne, pTwo, pThree, pFour];
