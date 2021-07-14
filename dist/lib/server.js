"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var expressRouter_1 = require("./expressRouter");
/**
 * A server hosts an api router on a tcp socket
 */
var Server = /** @class */ (function () {
    function Server(host, port) {
        this.host = host;
        this.port = port;
        this.router = new expressRouter_1.ExpressRouter();
        this.socket = http_1.default.createServer(this.router.requestListener());
        // @TODO - add event listeners for the http.Server
    }
    /**
     * Bind the server to a host:port
     */
    Server.prototype.start = function () {
        this.socket.listen(this.port, this.host);
    };
    /**
     * Add an array of routes to the router
     */
    Server.prototype.addRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (route) { return _this.router.addRoute(route); });
    };
    return Server;
}());
exports.default = Server;
