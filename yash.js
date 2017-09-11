var express = require('express');
//var bodyparser= require('body-parser');
var http = require('http');
var fs= require('fs');
    //app.use(bodyparser.urlencoded({extended:false}));
    //app.use(bodyparser.json());
     var app = express();

     var mongoose = require('mongoose');

     var url = 'mongodb://localhost:27017/Entry1db';

     var loginSchema = mongoose.Schema({
        username: String,
        password: String
     });

     mongoose.connect(url);

     app.get('/yash.html', function(req, res) {
        res.sendFile("C:\Users\yash thakkar\Desktop\SDM" + "/" + "yash.html");
     })

     app.post('/', function(req, res) {

        var Entry1 = mongoose.model('Entry1', loginSchema);

        var Entry1 = new Entry1({
            username: req.body.username,
            password: req.body.password 
        });
        Entry1.save(function(err) {
            if (err) {
                response.writehead(404);
                response.write('file not found')
            }
            else
            console.log("Login saved succesfully");
            response.send('success');
        }
        );
     });

     app.listen(8000, function() {
        console.log("Server is running!");
     });
