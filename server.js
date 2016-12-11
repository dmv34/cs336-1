/**
* This file provided by Facebook is for non-commercial testing and evaluation
* purposes only. Facebook reserves all rights not expressly granted.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
* FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//database variables
var MongoClient = require('mongodb').MongoClient;
var dbConnection;
//change the username for the db
var USERNAME = 'cs336';
//change the password for the db
var PASSWORD = 'PASSWORD';
//connects to database
MongoClient.connect('mongodb://'+USERNAME+':'+PASSWORD+'@ds063406.mlab.com:63406/cs336project', function (err, db) {
  if (err) throw err;

  dbConnection = db;
})

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/comments', function(req, res) {
  dbConnection.collection("squadrons").find({}).toArray(function(err, docs) {
    if (err) throw err;
    res.json(docs);
  });
});

app.post('/api/comments', function(req, res) {
  var newComment = {
    id: Date.now(),
    author: req.body.author,
    text: req.body.text,
  };
  //add comment to the database.
  dbConnection.collection('squadrons').insert(newComment);
});

//  Pulled from here: https://cs.calvin.edu/courses/cs/336/kvlinden/12router/code/routes.js
//---------START------------
app.get('/api/comments/:id', function(req, res) {
    dbConnection.collection("squadrons").find({"id": Number(req.params.id)}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

app.put('/api/comments/:id', function(req, res) {
    var updateId = Number(req.params.id);
    var update = req.body;
    dbConnection.collection('squadrons').updateOne(
        { id: updateId },
        { $set: update },
        function(err, result) {
            if (err) throw err;
            dbConnection.collection("squadrons").find({}).toArray(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
        });
});

app.delete('/api/comments/:id', function(req, res) {
    dbConnection.collection("squadrons").deleteOne(
        {'id': Number(req.params.id)},
        function(err, result) {
            if (err) throw err;
            dbConnection.collection("squadrons").find({}).toArray(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
        });
});
//---------END------------

app.get('*', function (request, response){
  response.sendFile(path.resolve(APP_PATH, 'index.tmpl.html'))
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
