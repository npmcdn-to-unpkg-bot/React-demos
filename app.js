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
var data = [];
app.post('/fetch', (req,res)=>{
	data.push(req.body);
	console.log(data);
	res.send(data).end();
});