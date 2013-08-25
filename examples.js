var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./');

var port = 8080;
console.log("Server started, visit http://localhost:" + port + "/examples");

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //

        file.serve(request, response);
    }).resume();
}).listen(port);