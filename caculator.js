var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.run = function (number1, number2) {
        return number1 + number2;
    };
    return Addition;
}());
var Subtraction = /** @class */ (function () {
    function Subtraction() {
    }
    Subtraction.prototype.run = function (number1, number2) {
        return number1 - number2;
    };
    return Subtraction;
}());
var Division = /** @class */ (function () {
    function Division() {
    }
    Division.prototype.run = function (number1, number2) {
        if (number2 === 0) {
            throw new Error("Number is equal 0");
        }
        return number1 / number2;
    };
    return Division;
}());
var Caculator = /** @class */ (function () {
    function Caculator() {
        this.operator = {};
    }
    Caculator.prototype.register = function (operatorName, operator) {
        this.operator[operatorName] = operator;
        return this;
    };
    Caculator.prototype.provide = function (operatorName) {
        var operator = this.operator[operatorName];
        if (!operator) {
            throw new Error("Operator with name: " + operatorName + " is not support");
        }
        return operator;
    };
    Caculator.prototype.result = function (operatorName, number1, number2) {
        return this.provide(operatorName).run(number1, number2);
    };
    return Caculator;
}());
var cal = new Caculator();
cal
    .register("+", new Addition())
    .register("-", new Subtraction())
    .register("/", new Division());
try {
    console.log(cal.result("/", 1, 1));
    console.log(cal.result("+", 1, 2));
    console.log(cal.result("-", 1, 2));
}
catch (e) {
    console.log(e);
}
