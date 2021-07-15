"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var logger_1 = require("./lib/logger");
var server_1 = require("./lib/server");
var routes_1 = require("./routes");
/**
 * Creates and runs the github pr api
 * @param host Host to bind
 * @param port Port to bind
 */
var run = function (host, port) {
    var app = routes_1.createRootApp();
    var logger = new logger_1.Logger();
    var server = new server_1.Server({
        host: host,
        port: port,
        app: app,
        logger: logger,
    });
    try {
        server.start(function () {
            logger.info("server running on", server.address(true));
        });
    }
    catch (err) {
        logger.error(err);
    }
};
exports.run = run;
