var express = require('express');
var app = express();

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-world', function (req, res) {
  var gifURL = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.send('Hello World');
});


app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});

app.get('/', function (req, res) {
  res.render('home')
})
