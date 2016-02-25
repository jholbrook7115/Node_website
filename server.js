var express = require('express');
var http = require("http");
var path = require("path");

var MongoClient = require('mongodb').MongoClient

var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/templates'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/files'));

app.get('/', function(req, res){
	console.log('GET request for /  ... serving ' + __dirname + '\\index.html');
	res.sendFile('index.html', {root: __dirname});
});

app.get('/download/resume', function(req, res){
	var dlPath = path.join(__dirname, '/files/jefferson-holbrook-Resume-jan-2016.doc');
	res.download(dlPath);
});

//Routes for fun-stuff projects
app.get('/other-stuff/cena-me/index.html', function(req, res){
	var pth = path.join(__dirname, '/other-stuff/cena-me/index.html');
	res.sendFile(pth);
});
app.get('/other-stuff/lasers/lasers.html', function(req, res){
	var pth = path.join(__dirname, '/other-stuff/lasers/lasers.html');
	res.sendFile(pth);
});
app.get('other-stuff/maptest/gmaps.html', function(req, res){
        var pth = path.join(__dirname, '/other-stuff/maptest/gmaps.html');
        res.sendFile(pth);
});
app.get('other-stuff/mango-tomfoolery/messing-with-mangos.html", function(req, res){
	var pth = path.join(__dirname, '/other-stuff/mango-tomfoolery/messing-with-mangos.html');
	res.sendFile(pth);
});




var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server running on ' + host + ':' + port);
});
