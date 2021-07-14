import { APIRoute } from "./lib/apiRouter";
import { GetAllPullRequests, GetPullRequest } from "./controllers/pulls";

/**
 * A list of routes to register with the server
 */
const apiRoutes: Array<APIRoute> = [
  {
    path: "/",
    methods: ["GET"],
    handler: GetAllPullRequests,
  },
  {
    path: "",
    methods: ["GET"],
    handler: GetPullRequest,
  }
];

export default apiRoutes;