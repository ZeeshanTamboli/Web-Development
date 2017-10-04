var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cat_app", {
  useMongoClient: true,
});

var catSchema = new mongoose.Schema({ //pattern
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// //adding a new cat to the database
// var george = new Cat({
//   name: "Mrs Norris",
//   age: 7,
//   temperament: "Evil"
// });
//
// george.save(function(err, cat) { //call-back function if saved
//   if(err) {
//     console.log("SOMETHING WENT WRONG!");
//   } else {
//     console.log("WE JUST SAVED A CAT TO THE DB:");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, function(err, cat) {
  if(err) {
    console.log(err);
  } else {
    console.log(cat);
  } 
});

//retrieve all cats from the database and console.log each one
Cat.find({}, function(err, cats) {
  if(err) {
    console.log("OH NO, ERROR!");
    console.log(err);
  } else {
    console.log("ALL THE CATS...");
    console.log(cats);
  }
});
