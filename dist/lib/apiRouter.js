"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRouter = void 0;
var express_1 = __importDefault(require("express"));
/**
 * Router creates an abstraction between the server and router implementation
 */
var APIRouter = /** @class */ (function () {
    function APIRouter() {
        this.router = express_1.default();
    }
    return APIRouter;
}());
exports.APIRouter = APIRouter;
