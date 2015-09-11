var fs = require('fs');
var tls= require('tls');

var options = {requestCert: false, key: fs.readFileSync('key.pem'),cert: fs.readFileSync('cert.pem'), requestCert: false, rejectUnauthorized: false};

var data = new Buffer(1024 * 1024);
data.fill('g');

var server = tls.createServer(options, function(sock) {
sock.end(data);
});

server.listen(23456, function () {
console.log('1 MB tls server listening.');
});

