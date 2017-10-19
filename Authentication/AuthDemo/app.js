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

app.use(require("express-session")({
  secret: "I like icecreams",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ===================
// ROUTES
// ===================


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});


//Auth Routes

//show signup form
app.get("/register", function(req, res) {
  res.render("register");
});

//handling user signup
app.post("/register", function(req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if(err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secret");
    });
  });
});


app.listen(3000, function() {
  console.log("SERVER STARTED!");
})
