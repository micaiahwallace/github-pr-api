#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var arg_1 = __importDefault(require("arg"));
var index_1 = require("./index");
var args = arg_1.default({
    "--host": String,
    "--port": Number,
});
var host = (_a = args["--host"]) !== null && _a !== void 0 ? _a : "0.0.0.0";
var port = (_b = args["--port"]) !== null && _b !== void 0 ? _b : 8080;
index_1.run(host, port);
