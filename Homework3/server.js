/*
*   @author: Logan VanProyen
*   @version: Fall 2016, CS336
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var idCounter = 5;
var port = 3000;
var MongoClient = require('mongodb').MongoClient;
var dbConnection;

//based on things from this page: http://expressjs.com/en/api.html
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

//From lab10
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//change the username for the db
var USERNAME = 'cs336';
//change the password for the db
var PASSWORD = 'PASSWORD';
//connects to database
 MongoClient.connect('mongodb://'+USERNAME+':'+PASSWORD+'@ds023593.mlab.com:23593/cs336', function (err, db) {
	 if (err) throw err;

	 dbConnection = db;
 })

//gets the people table from mongo
 app.get('/api/people', function(req, res) {
      dbConnection.collection("people").find({}).toArray(function(err, docs) {
         if (err) throw err;
         res.json(docs);
     });
 });







//this is the person objects
function Person(id, firstName, lastName, hireDate) {
	this.id = id;
  this.firstName = firstName;
	this.lastName = lastName;
	this.hireDate = hireDate;
}

//returns the list of people if /people is called
app.get('/api/people', function (req, res) {
	db.collection("people").find({}).toArray(function(err, docs) {
		 if (err) throw err;
		 res.json(docs);
 });
});

//returns the list of people if /people is called
app.get('/people', function (req, res) {
	db.collection("people").find({}).toArray(function(err, docs) {
		 if (err) throw err;
		 res.json(docs);
 });
});

//gets the body from the form that posted the info
app.post('/api/person/', function(req, res) {
  //adds to the counter to increment ids
  var setID = idCounter++;
	var newPerson = {
			 id:				setID,
			 firstName: req.body.firstName,
			 lastName: 	req.body.lastName,
			 hireDate: 	req.body.hireDate
			 }
	db.collection("people").insert(person, function(err, result){
			 if (err) throw err;
	});
});

//gets the specific id of a person
app.get('/person/:id', function (req, res) {
	var id = req.params.id;
     db.collection("people").find({id: id}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
     });
});

//puts a user by the specified id
app.put('/person/:id', function(req, res) {

});

//deletes a user by id
app.delete('/person/:id', function(req, res) {
	var id = req.params.id;
  db.collection("people").remove({id: id});
  res.send(req.params.id + ": Success!");
});

//console log to tell what port it is listening on
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
