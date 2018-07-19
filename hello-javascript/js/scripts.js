// ES5 for Beginners :)
// Print / log to the console
console.log('hello, js.');

// Declare Variables
// Variable names start with a-z, A-Z, (_), ($)
// numbers and other symbols are not allowed
var unicorn // declare variable
unicorn = "Charlotte"; // assign to variable
// or
var phoenix = "Arizona"; // initiate and assign variable

// Use camelCase for long variable names
var longVariableName = 'Good'
// NOT underscores!
var long_variable_names = "Bad"

// All #'s in JS are floating points
// 8 === 8.0

// Adding numbers and strings
// ...results in more strings
5 + '3' == '53';
'45' + 5 == '455';
// Must convert strings to integers first:
parseInt('5', 10); // must pass second argument for this to work
Number

// Also NaN (not a number)
// ...is treated as a number in JS

// If/Else statements in JS
if (age >= 21) {
    console.log('Drink too!');
} else if (age >= 16) {
    console.log('Drive!');
} else {
    console.log('Grow up!');
}

// Create a function
var greet = function () {
    console.log('hello');
};

// Create an array
var numberList = [];