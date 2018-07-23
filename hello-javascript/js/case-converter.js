// init global variables
var str, splitStr, snake, camel, convertedStr;
// init caseConvert function
var caseConvert = function (input) {
    // convert input to lowercase string
    str = input.toString().toLowerCase();
    // remove whitespace
    splitStr = str.split(' ');
    // snake_case string
    snake = splitStr.join('_');
    // camelCase string
    camel = splitStr.join('.');
    // set to option 
    convertedStr = snake;
    console.log(convertedStr);
    return convertedStr;
} 
// test it! init testInput variable
var testInput = 'Hello World';
// test #1: returns string?
console.assert(typeof(caseConvert(testInput)) === 'string', 'should return string');
// test #2: returns string no whitespace?
console.assert(caseConvert(testInput).indexOf(' ') === -1, 'should return string no whitespace');
// // test #3: returns string lowercased?
// var lowercased = new RegExp('[A-Z]');
// console.assert(lowercased.test(caseConvert(testInput)) === false, 'should return string lowercased');
// tests for snake / camel
if (convertedStr === snake) {
    // test #4: returns string snake_cased?
    var underscore = new RegExp('[a-z]_[a-z]');
    console.assert(underscore.test(caseConvert(testInput)), 'should return string snake_cased');
} else {
    // test #5: returns string camelCased?
    var spacecased = new RegExp('[a-z][A-Z]');
    console.assert(spacecased.test(caseConvert(testInput)), 'should return string camelCased');
}