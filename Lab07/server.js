/**
 * This implements some examples using jQuery and AJAX.
 * Adapted from KVLinden cs336 code repo.
 * Author: LoganVP
 */

const express = require("express")
const app = express();
const http_status = require("http-status-codes");
const bodyParser = require("body-parser")

const HOST = "localhost";
const PORT = 3000;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    //res.send("Hello, Class 7!");
    res.send("Go to /lab07.html");
});

app.get("/fetch", function(req, res) {
  res.send( {"message" : "Hello, " + req.query.name + "!"} );
});

app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT + "...");
});
