var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var hbs = exphbs.create({defaultLayout: 'main'});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
	res.render('home');
});

app.listen(3000, function() {
	console.log('Hello World app running on 3000.');
});