//https://dal.brightspace.com/d2l/le/content/250793/viewContent/3445551/View
//This is required to create an http server
const http = require('http');
//This defines which app to run...in my case app.js
const app = require('./app');

//defining the port on which the server will run
const port = process.env.PORT || 3000;

//creating the server to run on app
const server = http.createServer(app);

//listening the server on the defined port i.e 3000
server.listen(port);