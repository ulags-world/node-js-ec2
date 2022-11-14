var http = require("http");

const server = http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello from inside the instance\n');
})

server.listen(8081);



// Console will print the message
console.log('Server running ....')
