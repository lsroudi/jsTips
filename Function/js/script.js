// anonymous Function
var addNum = function(num1, num2) {
    return num1 + num2;
};

console.log(typeof addNum === 'function' && 'addNum est  une fonction'); //addNum est  une fonction

//A function returns a value. If the return value is not specified, then undefined is returned.
//
//If :
//the function was invoked with the new prefix 
//and the return value is not an object
//then this (the new object) is returned instead.
