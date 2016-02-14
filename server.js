var express = require('express');
var http = require("http");
var path = require("path");

var app = express();

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/templates'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/files'))

app.get('/', function(req, res){
	console.log('GET request for /  ... serving ' + __dirname + '\\index.html');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/download/resume', function(req, res){
	var dlPath = path.join(__dirname, '/files/jefferson-holbrook-Resume-jan-2016.doc');
	res.download(dlPath);
});

//Routes for fun-stuff projects

app.use(express.static(__dirname + '/other-stuff/Cena.me'));
app.get('/other-stuff/Cena.me/index.html', function(req, res){
	var pth = path.join(__dirname, '/other-stuff/Cena.me/index.html');
	res.sendFile(pth);
});

//Should probably move these into a subdirectory and staticly reference to it above.
// app.get('/main.js', function(req, res){
// 	//console.log('GET request for main.js');
// 	res.sendFile('main.js', {root: __dirname});
// });
// app.get('/github.js', function(req, res){
// 	//console.log('GET request for github.js');
// 	res.sendFile('main.js', {root: __dirname});
// });
// app.get('/controllers.js', function(req, res){
// 	console.log('GET request for controllers.js');
// 	res.sendFile('main.js', {root: __dirname});
// });

var server = app.listen(80, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server running on ' + host + ':' + port);
});
