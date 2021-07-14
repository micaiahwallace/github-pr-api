"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pulls_1 = require("./controllers/pulls");
/**
 * A list of routes to register with the server
 */
var apiRoutes = [
    {
        path: "/",
        methods: ["GET"],
        handler: pulls_1.GetAllPullRequests,
    },
    {
        path: "",
        methods: ["GET"],
        handler: pulls_1.GetPullRequest,
    }
];
exports.default = apiRoutes;
