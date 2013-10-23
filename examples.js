var static = require('node-static');

// Create a node-static server instance to serve the './public' folder
var file = new static.Server('./');
var port = process.argv[2] || 8000;
console.log("Server started, visit http://localhost:" + port + "/gh_pages");
require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(port);
