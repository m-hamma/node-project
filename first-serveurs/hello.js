//const http = require("http");
//
//const host = 'localhost';
//const port = 8000;
//
//const requestListener = function (req, res) {
//    res.writeHead(200);
//    res.end("My first server!");
//};
//
//const server = http.createServer(requestListener);
//server.listen(port, host, () => {
//    let myHeading = $document.querySelector("h1");
//    myHeading.textContent = "Bonjour, monde !";
//
//    console.log(`Server is running on http://${host}:${port}`);
//});
//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var name = url_parts.query.name;
    if (name) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Hello ' +name + '!'}));
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('../public/hello02.html', function (err,data) {
            res.end(data);
        });
    }
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
//console.log('Server running at http://127.0.0.1:1337/');