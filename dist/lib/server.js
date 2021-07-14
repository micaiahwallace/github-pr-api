"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiRouter_1 = require("./apiRouter");
/**
 * A server hosts an api router on a tcp socket
 */
var Server = /** @class */ (function () {
    function Server(host, port) {
        this.host = host;
        this.port = port;
        this.router = new apiRouter_1.APIRouter();
    }
    /**
     * Bind the server to a host:port
     */
    Server.prototype.start = function () {
        // @todo - implement start logic
    };
    /**
     * Add an array of routes to the router
     */
    Server.prototype.addRoutes = function (routes) {
        // @todo - implement add routes logic
    };
    return Server;
}());
exports.default = Server;
