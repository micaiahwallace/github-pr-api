import { Logger } from "./lib/logger";
import { Server } from "./lib/server";
import { createRootApp } from "./routes";

/**
 * Creates and runs the github pr api
 * @param host Host to bind
 * @param port Port to bind
 */
export const run = (host: string, port: number) => {

  const app = createRootApp();
  const logger = new Logger();
  const server = new Server({
    host,
    port,
    app,
    logger,
  });

  try {
    server.start(() => {
      logger.info("server running on", server.address(true));
    });
  } catch (err) {
    logger.error(err);
  }
}
