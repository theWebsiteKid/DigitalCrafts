// init new list (map) with alphabet
var map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// init cipher function
var cipher = function (input = 'Hello world') {
    // init phrase variable with
    // lowercased input string
    var inputLowerCase = input.toLowerCase();
    // init an array of letters
    // with split input string
    var letters = inputLowerCase.split('');
    // test it!
    // 1) an array of each char from input?
    // 2) are letters lowercased?
    console.log(letters);
    return input;
};
// call cipher function
cipher();
// test cipher function
console.assert(typeof(cipher()) === "string", "function should return string");