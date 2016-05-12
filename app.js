var express = require('express');
var app = express();

// Server Static files
app.use(express.static('public'));


// A simple test request
// app.get('/', function(req, res){
//     res.send('Hello world');
// })

// listen to the port and console it
app.listen(2580, function(){
    console.log("Server is listening on port 2580")
});
