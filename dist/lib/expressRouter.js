"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressRouter = void 0;
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
/**
 * Express implementation of the APIRouter interface
 */
var ExpressRouter = /** @class */ (function () {
    function ExpressRouter() {
        this.router = express_1.default();
        this.router.use(express_1.default.urlencoded({ extended: true }));
    }
    ExpressRouter.getRequestObject = function (req) {
        return {
            method: req.method,
            query: req.query,
            params: req.params,
        };
    };
    ExpressRouter.getResponseObject = function (res) {
        return {
            json: res.json,
            status: res.status,
        };
    };
    ExpressRouter.prototype.addRoute = function (route) {
        http_1.default.createServer(this.router);
        this.router.use(function ExpressRouteHandler(req, res, next) {
            if (route.methods.includes(req.method)) {
                route.handler(ExpressRouter.getRequestObject(req), ExpressRouter.getResponseObject(res));
            }
            else {
                next();
            }
        });
    };
    ExpressRouter.prototype.requestListener = function () {
        return this.router;
    };
    return ExpressRouter;
}());
exports.ExpressRouter = ExpressRouter;
