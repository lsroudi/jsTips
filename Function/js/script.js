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

//The Method Invocation Pattern
var obj = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
obj.increment(); // 1
document.writeln(obj.value);
obj.increment(6); // 7
document.writeln(obj.value);
obj.increment(7); // 14
document.writeln(obj.value);

//The Function Invocation Pattern

obj.double = function( ) {
    var that = this;
// Workaround.
    var helper = function( ) {
        that.value = addNum(that.value, that.value);
    };
    helper( ); //function invocation
};
obj.double( );
document.writeln(obj.value); //28

//The constructor invocation Pattern

var init = function(num){
  this.value = num;
};
init.prototype.getValue = function(){
    return this.value;
};

var i = new init(4);
document.writeln(i.getValue( )); // 4

//The apply invocation Pattern
var args = [3, 4];
var sum = addNum.apply(null, args);
document.writeln(sum); // 7


