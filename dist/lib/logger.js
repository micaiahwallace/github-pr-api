"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/**
 * Logging class to abstract logging implementation
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    // Send message to log transport
    Logger.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        console.log.apply(console, messages);
    };
    // Log an informational message
    Logger.prototype.info = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.log.apply(this, __spreadArray(["info:"], messages));
    };
    // Log a warning message
    Logger.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.log.apply(this, __spreadArray(["warn:"], messages));
    };
    // Log an error message
    Logger.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.log.apply(this, __spreadArray(["error:"], messages));
    };
    return Logger;
}());
exports.Logger = Logger;
