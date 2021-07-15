import Express from "express"
import { GetAllPullRequests, GetPullRequest } from "../controllers/pulls";

/**
 * Creates a router for the Pulls API resource
 * @returns Pulls API router
 */
export const pullsRouter = (): Express.Router => {
  const router = Express.Router();
  router.get("/:pr", GetPullRequest);
  router.get("/", GetAllPullRequests);
  return router;
}