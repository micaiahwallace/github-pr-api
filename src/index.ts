import { Logger } from "./lib/logger";
import Server from "./lib/server";
import routes from "./routes";

/**
 * Creates and runs the github pr api
 * @param host Host to bind
 * @param port Port to bind
 */
export const run = (host: string, port: number) => {

  const logger = new Logger();
  const server = new Server(host, port);

  try {
    server.addRoutes(routes);
    server.start();
  } catch (err) {
    logger.error(err)
  }
}
