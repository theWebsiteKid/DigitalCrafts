// Ex.1 Hello, you!
var hello = function (name) {
    console.log('Hello, ' + name + '!');
};
hello('mustache');

// Ex.2 Hello, you part 2!
var hello = function (name = 'world') {
    console.log('Hello, ' + name + '!');
};
hello();
hello('xavier');

// Ex.3 Madlib
var madlib = function (name = 'Xavier', subject = 'English') {
    var sentence = (name + "'s " + "favorite subject in school is " + subject + ".");
    console.log(sentence);
};
madlib();
madlib('Anushka', 'art');

// Ex.4 Tip Calculator
var tipAmount = function (amount, service) {
    var tip;
    if (service === 'good') {
        tip = (amount * 0.20);
    } else if (service === 'fair') {
        tip = (amount * 0.15);
    } else if (service === 'bad' || service === 'poor') {
        tip = (amount * 0.10);
    } else {
        console.log('Error: Try again.');
    }
    return tip; // return the tip amount
};
tipAmount(100, 'good');

// Ex.5 Tip Calculator 2
var totalAmount = function (amount, service) {
    var total = amount + (tipAmount(amount, service));
    return total; // return the total amount
};
totalAmount(100, 'good');

//Ex.6 Tip Calculator 3
var splitAmount = function (amount, service, people) {
    var split = (totalAmount(amount, service) / people);
    console.log(split); // print split amount to console
};
splitAmount(100, 'good', 4);