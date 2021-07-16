"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createSearchQuery_1 = require("./createSearchQuery");
test("create query part", function () {
    var result = createSearchQuery_1.queryPart("test", "value");
    expect(result).toBe("test:value");
});
test("create search query", function () {
    var result = createSearchQuery_1.createSearchQuery({
        type: "pr",
        repo: "user/repo",
        state: "open",
    });
    expect(result).toBe("type:pr repo:user/repo state:open");
});
