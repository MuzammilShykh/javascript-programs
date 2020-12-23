var english = parseInt(prompt("Your Marks In English? (Total  marks = 100)"));
var urdu = parseInt(prompt("Your Marks In Urdu? (Total  marks = 100)"));
var physics = parseInt(prompt("Your Marks In physics? (Total  marks = 100)"));
var sum = english + urdu + physics;
var average = sum / 3;
console.log("average:",average);
if (average > 80){
    alert("you are above standard, Admission Granted!")
}