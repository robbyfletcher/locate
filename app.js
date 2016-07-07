var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var hbs = exphbs.create({defaultLayout: 'main'});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
	res.render('home');
});

app.post('/lat/:latitude/lon/:longitude', function (req, res) {
	console.log(req.params);
	res.send(req.params);
})

app.listen(3000, function() {
	console.log('Hello World app running on 3000.');
});

/*
var request = require("request");

var options = { method: 'POST',
  url: 'http://osm1.unwiredlabs.com/locationiq/v1/reverse.php',
  qs:
   { format: 'json',
     key: '9bde6ebe55ee32c61dfd',
     lat: '30.39252910486187',
     lon: '-97.73886608551555',
     zoom: '16',
     addressdetails: '0' },
  headers:
   { 'postman-token': '38411a17-fc60-ff29-fd5a-76d708e72b23',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
*/
