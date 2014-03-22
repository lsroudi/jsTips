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

var init = function(num) {
    this.value = num;
};
init.prototype.getValue = function() {
    return this.value;
};

var i = new init(4);
document.writeln(i.getValue( )); // 4

//The apply invocation Pattern
var args = [3, 4];
var sum = addNum.apply(null, args);
document.writeln(sum); // 7


//Arguments

var add = function() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

document.writeln(add(1, 2, 7)); // 10

//Augmenting Types

Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function( ) {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
document.writeln((-7 / 2).integer( )); // -3

String.method('trim', function( ) {
    return this.replace(/^\s+|\s+$/g, '');
});
document.writeln('"' + " string   ".trim( ) + '"'); //"string"

//Recursion
var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);

};
document.writeln(factorial(4));// 24 // 4,1 => 4-1,1*4=> 2,4*3 =>1,4*3*2

//scope
var foo = function( ) {
    var a = 2, b = 8;
    var bar = function( ) {
        var b = 5, c = 18;
        a += b + c;
        console.log(a);
    };
    bar( );
};
foo(); // 25



//Closure

var testc = function() {
    var hidden = 10;
    return function addtohidden(params) {
        return hidden + params;
    };
};
var preadd = testc();
var result = preadd(2);
//the function has access to the context in which it was created.
document.writeln(result);//12

var fade = function(node) {
    var level = 1;
    var step = function( ) {
        var hex = level.toString(16);
//        console.log(hex);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);


String.method('custom', function() {
// The entity table. It maps entity names to
// characters.
    var entity = {
        fs: '<strong>',
        ls: '</strong>'

    };
    var boldme = function() {
        return entity['fs'] + a + entity['ls'];
    };
    var public = {
        bold: boldme
    };
    return public;
}());

document.writeln('lsroudi'.custom.bold( ));


