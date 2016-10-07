var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));

var people = [
  {
    fname: 'Logan',
    lname: 'VanProyen',
    id: 10,
    hiredate: "06/12/1994"
  },
  {
    fname: 'Jackson',
    lname: 'Van Haitsma',
    id: 11,
    hiredate: "05/02/2011"
  },
  {
    fname: 'Trenton',
    lname: 'Wells',
    id: 12,
    hiredate: "10/30/2005"
  }
];
//Home Page
app.get('/', function (req, res) {
  res.send('This is the Home!');
});

//shows all the people that we have saved
app.get('/people', function (req, res) {
  res.send(people);
});

//shows the last name and first name of the person with the associated id.
app.get('/person/:id', function (req, res) {
if(id == null) {
  res.sendStatus(404);
} else {
    res.json(people[req.params.id].lname + ', ' + people[req.params.id].fname);
};
});

//gets anniversary date
//it uses the function the professor gave us in lab02
app.get('/person/:id/:years', function (req, res) {
  if(hiredate == null) {
    res.sendStatus(404);
  } else {
    var today = new Date();
    var newDate = new Date(hiredate);
    var years = today.getFullYear() - newDate.getFullYear();
    var m = today.getMonth() - newDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < newDate.getDate())) {
        years--;
    };
    res.send("Anniversary number: " + years.toString());
  };
});


//console log to tell what port it is listening on
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
