var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
	var sounds = {
		pig: "Oink!",
		cow: "Moo!",
		dog: "Woof Woof!",
		cat: "Meow",
		goldfish: "...."
	};
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = "";
	for(var i = 0; i < times; i++) {
		result += message + " ";
	}
	res.send(result);  //res.send can run only ONE time, so we cannot put it in for loop
});	

app.get("*", function(req, res) {
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3001, function(req, res) {
	console.log("SERVER HAS STARTED!!");
});