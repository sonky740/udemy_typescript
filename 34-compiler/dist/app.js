"use strict";
var button = document.querySelector('button');
var clickHandler = function (message) {
    console.log("Clicked! ".concat(message));
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', clickHandler.bind(null, 'Complete'));
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map