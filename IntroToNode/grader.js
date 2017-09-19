var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(scores) {
  var total = 0, avg;
  scores.forEach(function(score) {
    total += score;
  });
  avg = total / scores.length;
  return Math.round(avg);
}

console.log("Average score for environment science");
console.log(average(scores));// should return 94

console.log("Average score for organic chemistry");
console.log(average(scores2)); //should return 68