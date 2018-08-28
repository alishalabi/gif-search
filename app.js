var giphy = require('giphy-api')();

var express = require('express');
var app = express();

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-world', function (req, res) {
  var gifURL = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.send('Hello World');
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});

var http = require('http');

app.get('/', function (req, res) {
  giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});

app.use(express.static('public'));
