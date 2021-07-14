import { APIRouter, APIRoute } from "./apiRouter"

/**
 * A server hosts an api router on a tcp socket
 */
class Server {
  
  host: string;
  port: number;
  router: APIRouter;

  constructor(host: string, port: number) {
    this.host = host
    this.port = port
    this.router = new APIRouter()
  }

  /**
   * Bind the server to a host:port
   */
  start() {
    // @todo - implement start logic
  }

  /**
   * Add an array of routes to the router
   */
  addRoutes(routes: Array<APIRoute>) {
    // @todo - implement add routes logic
  }
}

export default Server;