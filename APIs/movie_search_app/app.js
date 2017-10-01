var express = require('express');
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res) {
	request("http://imdbapi.poromenos.org/js/?name=game+of+thrones", function(error, response, body) {
		if(!error && response.statusCode == 200) 
		{
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

app.listen(3000, function(){
  console.log("Movie App has started!!");
});