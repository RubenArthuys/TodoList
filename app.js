var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false});
var path = require ('path');

var app = express();
app.set('view engine', 'ejs');

app.use(session({secret: 'todosecret'}))

app.get('/todo', function(req, res) {
  res.render('index.ejs', {null:null});
});

// app.get('/', function(req, res) {
//   res.render('', {null:null});
// });

// app.get('/', function(req, res) {
//   res.render('', {null:null});
// });



// CSS-Js-Static loading
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');

app.listen(8080);