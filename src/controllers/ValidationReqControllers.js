"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationReqControllers = /** @class */ (function () {
    function ValidationReqControllers() {
    }
    ValidationReqControllers.prototype.requestLogger = function (req, res, next) {
        console.log('Detected request', '\n', req.headers["user-agent"]);
        next();
    };
    return ValidationReqControllers;
}());
exports.default = new ValidationReqControllers();
