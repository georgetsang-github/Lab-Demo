/*
    labdemo.js
    author: George Tsang
    
    Request and response on Node.js via Express.js. 

    To test this app, one should
        1. run this progam in the integrated terminal
        2. open browser and enter URL "localhost:3000/..."

    Framework: express

    npm:

        npm install express --save
*/

var HTTP_PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello WEB322!</h1>");
});

var server = app.listen(HTTP_PORT, function() {
    console.log(`Listening on port ${HTTP_PORT}`);
});