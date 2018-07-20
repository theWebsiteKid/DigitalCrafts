// init caseConvert function
var caseConvert = function (str) {
    // split string into a list of letters
    var listOfStr = str.split(' ');
    // join list of letters
    var convertedStr = listOfStr.join('');
    //return convertedStr
    return convertedStr;
}
// test caseConvert function
console.assert(typeof(caseConvert('')) === "string", "should return a string");
console.assert(caseConvert('hello World').indexOf(' ') === -1, "should return a string with no whitespace");