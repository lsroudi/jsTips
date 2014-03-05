//excepptions
var division = function(a, b) {
    if (b !== 0) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw {
                name: 'TypeError',
                message: 'division needs numbers'
            };
        }
    }
    return a / b;
};
var division_try = function( ) {
    try {
        division(7);
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
};
division_try(); // TypeError: division needs numbers