var express = require('express');
var cons = require('consolidate');
var app = express();

app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//静态资源放在public目录里
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('index',{

	});
});

var server = app.listen(8000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('fishGame app listening at http://', host, port);
})