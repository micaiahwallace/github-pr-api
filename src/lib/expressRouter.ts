import http from "http"
import Express from "express"
import { APIRouter, APIRoute, HTTPMethod, APIResponse, APIRequest } from "./apiRouter";

/**
 * Express implementation of the APIRouter interface
 */
export class ExpressRouter implements APIRouter {
  router: Express.Application;
  constructor() {
    this.router = Express()
    this.router.use(Express.urlencoded({ extended: true }));
  }

  static getRequestObject(req: any): APIRequest {
    return {
      method: req.method,
      query: req.query,
      params: req.params,
    }
  }

  static getResponseObject(res: any): APIResponse {
    return {
      json: res.json,
      status: res.status,
    }
  }

  addRoute(route: APIRoute) {
    http.createServer(this.router)
    this.router.use(function ExpressRouteHandler(req, res, next) {
      if (route.methods.includes(req.method as HTTPMethod)) {
        route.handler(
          ExpressRouter.getRequestObject(req), 
          ExpressRouter.getResponseObject(res)
        );
      } else {
        next();
      }
    });
  }

  requestListener() {
    return this.router
  }
}