var faker = require("faker");

console.log("=========================");
console.log("WELCOME TO MY SHOP");
console.log("=========================");

for(var i = 0; i < 10; i++) {
  var randomProductName = faker.commerce.productName();
  var randomPrice = faker.commerce.price();
  console.log(randomProductName + " - $" + randomPrice);
}



