var express = require("express");
var app = express();
var bodyParser = require ("body-parser");
var mongoose = require ("mongoose");
var carRoutes = require("./route/carRoutes");
var port = 8080;

app.use(bodyParser.json());

app.use(express.static("../FE"));
 
app.use("/world-of-the-car", carRoutes);

mongoose.connect("mongodb://localhost/car", function() {
    console.log("Data base is connected");
});

app.listen(port, function() {
    console.log("server is runing on port " + port);
});