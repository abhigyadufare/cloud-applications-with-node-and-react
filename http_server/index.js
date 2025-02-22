// Import the http module
const http = require("http");

// Define the request listener function
const requestListener = (req, res) => {
    res.writeHead(200); // Set the status code to 200 (OK)
    res.end("successfully connected Hello, World!") // Send the response "Hello, World!"
};

// Define the port Number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log("Server listening on port: " + port);