// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));
var _ = require('underscore');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create static server
app.use(express.static('public'));

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var newComment = {
    id: Date.now(),}});