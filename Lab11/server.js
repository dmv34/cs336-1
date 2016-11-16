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
 var COMMENTS_FILE = path.join(__dirname, 'comments.json');

 //database variables
 var MongoClient = require('mongodb').MongoClient;
 var dbConnection;
 //change the username for the db
 var USERNAME = 'cs336';
 //change the password for the db
 var PASSWORD = 'PASSWORD';
 //connects to database
  MongoClient.connect('mongodb://'+USERNAME+':'+PASSWORD+'@ds023593.mlab.com:23593/cs336', function (err, db) {
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
      dbConnection.collection("comments").find({}).toArray(function(err, docs) {
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
    dbConnection.collection('comments').insert(newComment);
 });

 app.listen(app.get('port'), function() {
     console.log('Server started: http://localhost:' + app.get('port') + '/');
 });
