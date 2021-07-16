"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ghRequest = void 0;
var got_1 = __importDefault(require("got"));
exports.ghRequest = got_1.default.extend({
    prefixUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
    }
});
