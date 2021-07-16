"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSearchQuery = exports.queryPart = void 0;
var queryPart = function (key, value) { return key + ":" + value; };
exports.queryPart = queryPart;
var createSearchQuery = function (opts) {
    var query = [];
    query.push(exports.queryPart("type", opts.type));
    query.push(exports.queryPart("repo", opts.repo));
    query.push(exports.queryPart("state", opts.state));
    return query.join(" ");
};
exports.createSearchQuery = createSearchQuery;
