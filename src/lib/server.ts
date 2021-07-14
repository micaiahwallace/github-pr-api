import http from "http"
import { APIRouter, APIRoute } from "./apiRouter"
import { ExpressRouter } from "./expressRouter"

/**
 * A server hosts an api router on a tcp socket
 */
class Server {
  
  host: string;
  port: number;
  router: APIRouter;
  socket: http.Server;

  constructor(host: string, port: number) {
    this.host = host
    this.port = port
    this.router = new ExpressRouter()
    this.socket = http.createServer(this.router.requestListener())
    // @TODO - add event listeners for the http.Server
  }

  /**
   * Bind the server to a host:port
   */
  start() {
    this.socket.listen(this.port, this.host)
  }

  /**
   * Add an array of routes to the router
   */
  addRoutes(routes: Array<APIRoute>) {
    routes.forEach(route => this.router.addRoute(route))
  }
}

export default Server;