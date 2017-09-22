var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
  res.send("Hi There!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	console.log("SOMEONE MADE A REQUEST TO /dog");
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
  console.log(req);
  res.send("WELCOME TO SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  res.send("WELCOME TO THE COMMENTS PAGE");
});

app.get("*", function(req, res) {
  res.send("YOU ARE A STAR!");
});

//Tell Express to listen for requests (start server)
app.listen(3001, function(){
  console.log("Server has started!!");
});