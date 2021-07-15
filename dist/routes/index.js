"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootApp = void 0;
var express_1 = __importDefault(require("express"));
var pulls_1 = require("./pulls");
/**
 * Create express app and mount root level routers and middleware
 * @returns Root express application
 */
var createRootApp = function () {
    var app = express_1.default();
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/pulls", pulls_1.pullsRouter());
    return app;
};
exports.createRootApp = createRootApp;
