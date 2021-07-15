import http from "http"
import Express from "express"
import { Logger } from "./logger";
import { AddressInfo } from "net";

/**
 * Constructor options for Server
 */
export interface ServerOptions {
  host: string;
  port: number;
  app: Express.Application;
  logger?: Logger;
}

/**
 * A server hosts an express router on a tcp socket
 */
export class Server {
  
  host: string;
  port: number;
  app: Express.Application;
  logger: Logger;
  socket: http.Server;

  constructor({ host, port, app, logger }: ServerOptions) {
    this.host = host;
    this.port = port;
    this.app = app;
    this.logger = logger ?? new Logger();
    this.socket = http.createServer(this.app);
  }

  /**
   * Bind the server to the tcp socket
   * @param onListen Callback assigned to 'listening' event
   */
  start(onListen: ()=>void) {
    this.socket.listen(this.port, this.host, () => {
      const addr = this.socket.address() as AddressInfo;
      this.host = addr.address;
      this.port = addr.port;
      onListen();
    });
  }

  /**
   * Get the address of the server as a string
   * @param full If the output should contain the schema. Default: false
   */
  address(full: boolean = false): string {
    const schema = "http://";
    const address = `${this.host}:${this.port}`;
    return `${full && schema}${address}`;
  }
}
