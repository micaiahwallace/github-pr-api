import Express from "express"
import { pullsRouter } from "./pulls"

/**
 * Create express app and mount root level routers and middleware
 * @returns Root express application
 */
export const createRootApp = (): Express.Application => {
  const app = Express();
  app.use(Express.urlencoded({ extended: true }));
  app.use("/pulls", pullsRouter());
  return app;
}