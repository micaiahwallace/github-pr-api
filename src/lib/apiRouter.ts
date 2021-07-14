import Express from "express"

/**
 * Standard HTTP methods
 */
export type HTTPMethods = "HEAD" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE";

/**
 * Represents a single route and handler logic function
 * that mounts to a router
 */
 export interface APIRoute {
  path: string;
  methods: Array<HTTPMethods>;
  handler: ()=>void;
}

/**
 * Router creates an abstraction between the server and router implementation
 */
export class APIRouter {
  router: Express.Application;
  constructor() {
    this.router = Express()
  }
}
