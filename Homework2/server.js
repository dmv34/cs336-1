/*
*   @author: Logan VanProyen
*   @version: Fall 2016, CS336
*/
var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

//based on things from this page: http://expressjs.com/en/api.html
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/static', express.static(__dirname+'/public'));

var idCounter = 4;


//Person class
function Person (id, firstName, lastName, hireDate) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.hireDate = hireDate;
}

//makes people
var list = [];
var n1 = new Person(1, "Logan", "VanProyen", "06/12/1994");
var n2 = new Person(2, "Barack", "Obama", "01/20/2009");
var n3 = new Person(3, "Michael", "LeRoy", "06/11/2012");
var n4 = new Person(4, "Calvin", "College", "10/25/2016");

list.push(n1);
list.push(n2);
list.push(n3);
list.push(n4);



//returns the list of people if /people is called
app.get('/people', function (req, res) {
  res.json(list);
});

//gets the specific id of a person
app.get('/person/:id', function (req, res) {
    if (req.params.id-1 in list) {
      res.json(list[req.params.id-1]);
    } else {
      res.sendStatus(404);
    }
});

//opens the webpage to add a person
app.get('/add/', function(req, res) {
  res.sendFile(__dirname+'/public/newPerson.html');
});

//opens the webpage to find a person
app.get('/find/', function(req, res) {
  res.sendFile(__dirname+'/public/getPerson.html');
});

//gets the body from the form that posted the info
app.post('/person/', function(req, res) {
  var setID = idCounter++;
  var nPerson = new Person(setID, req.body.firstname, req.body.lastName, req.body.years);
  list.push(nPerson);
  res.json(nPerson);
});

//puts a user by the specified id
app.put('/person/:id', function(req, res) {
  if (req.params.id-1 in list) {
    put.Person(req.params.id-1, req.body.firstname, req.body.lastName, req.body.years);
  } else {
    res.sendStatus(404);
  }
}

//deletes a user by id
app.delete('/person/:id', function(req, res) {
  if (req.params.id-1 in list) {
    delete.Person(req.params.id-1]);
  } else {
    res.sendStatus(404);
  }
}

//gets the lastName and firstName of the named person
app.get('/person/:id/name', function (req, res) {
    if (req.params.id-1 in list) {
      res.json({"First Name": list[req.params.id-1].firstName,
                "Last Name" : list[req.params.id-1].lastName});
    } else {
      res.sendStatus(404);
    }
});

//shows the years
app.get('/person/:id/years', function (req, res) {
    if (req.params.id-1 in list) {
      res.json({ "Anniversary" : getTime(list[req.params.id-1].hireDate)});
    } else {
      res.sendStatus(404);
    }
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

//console log to tell what port it is listening on
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

//https://github.com/CRRDerek/cs336/blob/master/homework02/index.js
