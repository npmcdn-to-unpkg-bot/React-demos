var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static('node_modules'));
app.use(express.static('build'));
app.use(express.static('my-demos'));

app.listen(8000,()=>{
	console.log('server running on port 8000');
});

app.get('/demo9', (req,res)=>{
	res.sendFile(__dirname + '/my-demos/demo9-ajax.html');
});
app.get('/fetch', (req,res)=>{
	var arr = [{name:'abby'},{name:'jane'},{name:'scott'},{name:'jessica'}];
	console.log('receive request');
	res.send(arr).end();
});
app.post('/fetch', (req,res)=>{
	var arr = [1,2,3,4,5];
	console.log(req.body);
	res.send(arr).end();
});