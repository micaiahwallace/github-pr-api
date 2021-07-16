"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parses the user/org and repo name from a github url
 * @param url Github repo url, format specified in readme
 */
function parseRepoUrl(url) {
    if (typeof url !== "string" || url.length === 0)
        throw new Error("type error");
    var parsedUrl = new URL(url, "https://github.com");
    var pathParts = parsedUrl.pathname.split("/");
    if (pathParts.length < 2) {
        throw new Error("invalid url format");
    }
    // Last 2 parts of url path are the user and repo
    var user = pathParts[pathParts.length - 2].trim();
    var repo = pathParts[pathParts.length - 1].trim();
    if (user.length === 0 || repo.length === 0) {
        throw new Error("invalid url format");
    }
    return user + "/" + repo;
}
exports.default = parseRepoUrl;
