"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullsRouter = void 0;
var express_1 = __importDefault(require("express"));
var pulls_1 = require("../controllers/pulls");
/**
 * Creates a router for the Pulls API resource
 * @returns Pulls API router
 */
var pullsRouter = function () {
    var router = express_1.default.Router();
    router.get("/:pr", pulls_1.GetPullRequest);
    router.get("/", pulls_1.GetAllPullRequests);
    return router;
};
exports.pullsRouter = pullsRouter;
