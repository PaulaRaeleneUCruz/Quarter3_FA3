let num1 = Math.ceil(Math.random() * 20);  
let num2 = Math.ceil(Math.random() * 20);  
let num3 = Math.ceil(Math.random() * 20);  

let biggest = Math.max(num1, num2, num3);  

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nthLetter = alphabet[num1 - 1] || "Z";  

let totalMinutes = num2 * num3;  
let hours = Math.floor(totalMinutes / 60);  
let minutes = totalMinutes % 60;  

document.getElementById("story").innerHTML = 
    "An explorer named " + nthLetter + " entered a mystical crystal cave. " +
    "After " + totalMinutes + " minutes (" + hours + " hours and " + minutes + " minutes), " +
    "they discovered the largest crystal with a power level of " + biggest + ". " +
    "This crystal was said to hold immense magical energy, capable of reshaping reality!";
