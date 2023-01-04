"use strict";
exports.__esModule = true;
var firstName = "Andy";
var age = 48;
function uppercaseString(str) {
    return str.toUpperCase();
}
var uppercaseName = uppercaseString(firstName);
console.log(uppercaseName);
var stringArray = ["Andy", "kayla"];
stringArray.push(firstName);
console.log(stringArray);
