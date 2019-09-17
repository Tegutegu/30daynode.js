var express = require('express');
var fs = require('fs')

var app = express()

app.get('/', function (req, res) {
  res.send('Simple Example of routes!');
}) 

app.get('/signup', function(req,res){

	
	var name = req.query.name; 
  var email = req.query.email;
  var password = req.query.password;

  console.log(name + '' + email + ' ' + password);

 
    res.send("In signup module")
});

app.listen(3000, function () {
  console.log('Server is listening at 3000')
})