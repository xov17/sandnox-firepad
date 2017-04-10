var express = require("express");
var app = express();
var path = require("path");

var logger = require("morgan");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "jade");

app.use(logger("dev"));



app.get('/', function(req, res) {
    res.render('note');
});

app.listen(3000);



console.log("Running at Port 3000");