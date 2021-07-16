"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPullRequestSchema = exports.GetAllPullRequestSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.GetAllPullRequestSchema = {
    query: joi_1.default.object({
        repo: joi_1.default.string().required(),
        page: joi_1.default.number().integer().optional().min(1).default(1),
        per_page: joi_1.default.number().integer().optional().min(1).default(30),
    }),
};
exports.GetPullRequestSchema = {
    query: joi_1.default.object({
        repo: joi_1.default.string().required(),
    }),
    params: joi_1.default.object({
        pr: joi_1.default.number().integer().required(),
    }),
};
