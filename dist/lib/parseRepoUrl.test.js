"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parseRepoUrl_1 = __importDefault(require("./parseRepoUrl"));
test("parsing full url", function () {
    var url = "https://github.com/mongodb/mongo";
    var result = parseRepoUrl_1.default(url);
    expect(result).toBe("mongodb/mongo");
});
test("parsing schema-less url", function () {
    var url = "github.com/mongodb/mongo";
    var result = parseRepoUrl_1.default(url);
    expect(result).toBe("mongodb/mongo");
});
test("parsing user/repo format", function () {
    var url = "mongodb/mongo";
    var result = parseRepoUrl_1.default(url);
    expect(result).toBe("mongodb/mongo");
});
test("throws when parsing an invalid repo url", function () {
    expect(function () { return parseRepoUrl_1.default("https://github.com/invalid_url"); }).toThrow();
    expect(function () { return parseRepoUrl_1.default("test.com"); }).toThrow();
    expect(function () { return parseRepoUrl_1.default(""); }).toThrow();
});
