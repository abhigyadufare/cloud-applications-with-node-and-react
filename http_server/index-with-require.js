// Import the HTTP module
const http = require('http');

// Import the "today" module
const today = require("./today");

// Define the request listener function
const requestListener = (req, res) => {
    res.writeHead(200); // Set the status code to 200 (OK)
    let {date, istTime} = today.getDate(); // Get the current date from the "today" module

    // Determine the appropriate greeting based on the current time
    let greeting = `It is still not morning. Right now it's ${istTime}`;
    if (date.getHours() > 6 && date.getHours() < 12) {
        greeting = `Good Morning! It's ${istTime}`;
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        greeting = `Good Afternoon! It's ${istTime}`;
    } else if (date.getHours() >= 18 && date.getHours() < 21) {
        greeting = `Good Evening! It's ${istTime}`;
    } else if (date.getHours() >= 21 && date.getHours() < 24) {
        greeting = `Good Night! It's ${istTime}`;
    } 

    // Send the response with appropriate greeting
    res.end(`Hello, ${greeting}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log(`Server is listening on port: ${port}`);