var theNumber = 1; //global var = 1

var michelangelo = function (value) { // var value = 1
    value = (value * 2); // 1 * 2 = 2
    // value = 2
    return value; // 2
};

var donatello = function (value, anotherValue) {
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
};

var leonardo = function (value) { // 1
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
};

var raphael = function (value, anotherValue, yetAnotherValue) {
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
};

michelangelo(theNumber) + leonardo(theNumber); // 2 +
// ^ Before running the script, what number would you expect the line above to evaluate to?
var resultOne = undefined; // replace undefined with the result


theNumber = theNumber * 2;

donatello(theNumber, 2) - (raphael(3, 2, theNumber));
// ^ Before running the script, what number would you expect the line above to evaluate to?
var resultTwo = undefined; // replace undefined with the result
