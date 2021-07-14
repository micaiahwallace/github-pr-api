"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var logger_1 = require("./lib/logger");
var server_1 = __importDefault(require("./lib/server"));
var routes_1 = __importDefault(require("./routes"));
/**
 * Creates and runs the github pr api
 * @param host Host to bind
 * @param port Port to bind
 */
var run = function (host, port) {
    var logger = new logger_1.Logger();
    var server = new server_1.default(host, port);
    try {
        server.addRoutes(routes_1.default);
        server.start();
    }
    catch (err) {
        logger.error(err);
    }
};
exports.run = run;
