var express = require('express');
var app = express();
var request = require("request");

app.get("/results", function(req, res) {
	request("http://imdbapi.poromenos.org/js/?name=how+i+met+your+mother", function(error, response, body) {
		if(!error && response.statusCode == 200) 
		{
			var results = JSON.parse(body);
			res.send(results["How I Met Your Mother"]["episodes"][0]["name"]);
		}
	});
});

app.listen(3000, function(){
  console.log("Movie App has started!!");
});