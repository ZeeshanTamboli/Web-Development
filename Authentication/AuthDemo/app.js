var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/auth_demo_app", {
  useMongoClient: true,
});

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(3000, function() {
  console.log("SERVER STARTED!");
})
