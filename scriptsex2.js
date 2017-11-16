var age = prompt("What is your age?");

var date = new Date();
var year = date.getFullYear();
var birth = year - age;

document.write(birth);
