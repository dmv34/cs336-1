/*
*   @author: Logan VanProyen
*   @version: Fall 2016, CS336
*/
var express = require('express');
var app = express();
var port = 3000;


//Person class
function Person (firstName, lastName, hireDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hireDate = hireDate;
}

//makes people
var people = {
  1 : new Person(
    "Logan",
    "VanProyen",
    "06/12/1994"
  ),
  2 : new Person(
    "Barack",
    "Obama",
    "01/20/2009")
}

//returns the list of people if /people is called
app.get('/people', function (req, res) {
  res.json(people);
});

//gets the specific id of a person
app.get('/person/:id', function (req, res) {
    if (req.params.id in people) {
      res.json(people[req.params.id]);
    } else {
      res.sendStatus(404);
    }
});

//gets the lastName and firstName of the named person
app.get('/person/:id/name', function (req, res) {
    if (req.params.id in people) {
      res.json({"First Name": people[req.params.id].firstName,
                "Last Name" : people[req.params.id].lastName});
    } else {
      res.sendStatus(404);
    }
});

//calculates years.
app.get('/person/:id/years', function (req, res) {
    if (req.params.id in people) {
      res.json({ "Anniversary" : getTime(people[req.params.id].hireDate)});
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
