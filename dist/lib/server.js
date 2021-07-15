"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var http_1 = __importDefault(require("http"));
var logger_1 = require("./logger");
/**
 * A server hosts an express router on a tcp socket
 */
var Server = /** @class */ (function () {
    function Server(_a) {
        var host = _a.host, port = _a.port, app = _a.app, logger = _a.logger;
        this.host = host;
        this.port = port;
        this.app = app;
        this.logger = logger !== null && logger !== void 0 ? logger : new logger_1.Logger();
        this.socket = http_1.default.createServer(this.app);
    }
    /**
     * Bind the server to the tcp socket
     * @param onListen Callback assigned to 'listening' event
     */
    Server.prototype.start = function (onListen) {
        var _this = this;
        this.socket.listen(this.port, this.host, function () {
            var addr = _this.socket.address();
            _this.host = addr.address;
            _this.port = addr.port;
            onListen();
        });
    };
    /**
     * Get the address of the server as a string
     * @param full If the output should contain the schema. Default: false
     */
    Server.prototype.address = function (full) {
        if (full === void 0) { full = false; }
        var schema = "http://";
        var address = this.host + ":" + this.port;
        return "" + (full && schema) + address;
    };
    return Server;
}());
exports.Server = Server;
