"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPullRequest = exports.ListPullRequests = void 0;
var createSearchQuery_1 = require("./createSearchQuery");
var ghRequest_1 = require("./ghRequest");
function ListPullRequests(repo, per_page, page) {
    var options = {
        searchParams: {
            q: createSearchQuery_1.createSearchQuery({ repo: repo, type: "pr", state: "open" }),
            page: page,
            per_page: per_page,
        }
    };
    return ghRequest_1.ghRequest("search/issues", options).json();
}
exports.ListPullRequests = ListPullRequests;
function GetPullRequest(repo, pr_number) {
    var url = "repos/" + repo + "/pulls/" + pr_number;
    console.log(url);
    return ghRequest_1.ghRequest(url).json();
}
exports.GetPullRequest = GetPullRequest;
