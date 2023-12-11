var express =require('express');
var fs = require('fs');
var app = express();

app.get('/',function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('../public/express01.html', function (err,data) {
        res.end(data);
    });
});

app.get('/hello/:name', function(req,res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello ' + req.params.name + '!'}));
});

app.listen(8080)
console.log('Server running at http://127.0.0.1:8080/');