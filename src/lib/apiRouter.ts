import http from "http"

/**
 * Standard HTTP methods
 */
export type HTTPMethod = "HEAD" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE";

/**
 * Represents a single route and handler logic function
 * that mounts to a router
 */
export interface APIRoute {
  path: string;
  methods: Array<HTTPMethod>;
  handler: (req: APIRequest, res: APIResponse) => void;
}

/**
 * Standardized minimal interface for inbound API requests
 */
export interface APIRequest {
  method: HTTPMethod;
  query: Record<string, string>;
  params: Record<string, string>;
}

/**
 * Standardized minimal interface for API responses
 */
export interface APIResponse {
  json: (resp: any) => void;
  status: (code: number) => void;
}

/**
 * Router creates an abstraction between the server and router implementation
 */
export interface APIRouter {

  /**
   * Add a new route into the router processing chain in order
   * @param route New route to add to the router
   */
  addRoute(route: APIRoute): void;

  /**
   * Get an entry point function for the router to attach to an http server
   */
  requestListener(): http.RequestListener;
}
