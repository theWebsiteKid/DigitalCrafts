var caesar = {
'a': 1, 
'b': 3, 
'c': 2, 
'e': 5, 
'd': 4, 
'g': 7, 
'f': 6, 
'i': 9, 
'h': 8,
'k': 11, 
'j': 10, 
'm': 13, 
'l': 12, 
'o': 15, 
'n': 14, 
'q': 17, 
'p': 16, 
's': 19, 
'r': 18, 
'u': 21, 
't': 20, 
'w': 23, 
'v': 22, 
'y': 25, 
'x': 24, 
'z': 26 };

// cipher function
var cipher = function (phrase = "hello world", offset = 13) {
    // letters is an array of
    var letters = phrase.split('');
    var newPhrase = [];
    var letter = '';
    console.log('fuction works, variables declared');
    for (i = 0; i <= phrase.length; i++) {
        console.log('for loop started!');
        if (caesar[i] <= 13) {
            letter = Object.keys(caesar) + offset;
            newPhrase.push(letter);
            console.log(letter);
        } else { 
            letter = Object.keys(caesar) - offset;
            newPhrase.push(letter);
            console.log(letter);
        }
        var decipher = newPhrase.join('');
        return decipher
    };
    console.log(decipher);
};

cipher();