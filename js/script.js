let rain= prompt("How much rain fell?");

var yield = 50;

console.log(rain);

var str = "*";
var rainyield = yield;
var fertrainyield = rainyield;

console.log("Rain: " + str.repeat(rain));

if (rain >=20){
  rainyield = yield * .9;
} else if(rain <10){
  rainyield = yield * .8;
}
let fert = prompt("Did you use fertilizer?");

if (fert == "no") {
console.log("The yield should be " + rainyield + " bushels per acre.");

} else if (fert == "yes") {
    let ferttype= prompt("Did you use premium or regular fertilizer?")

if(ferttype === "premium"){
   fertrainyield = rainyield *1.15
   console.log("The yield should be " + fertrainyield + " bushels per acre.");
} else if (ferttype === "regular"){
   fertrainyield = rainyield *1.1
   console.log("The yield should be " + fertrainyield + " bushels per acre.");
}
}

