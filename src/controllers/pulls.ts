import Express from "express"
import { ListPullRequests } from "../lib/githubPr";
import parseRepoUrl from "../lib/parseRepoUrl";

/**
 * Retrieve github repo pull requests
 */
export const GetAllPullRequests = async (req: Express.Request, res: Express.Response) => {
  try {
    
    if (typeof req.query.repo !== "string") throw new Error("bad request")
    if (typeof req.query.page !== "string" && typeof req.query.page !== "undefined") throw new Error("bad request")
    if (typeof req.query.per_page !== "string" && typeof req.query.per_page !== "undefined") throw new Error("bad request")

    const per_page = Number.parseInt(req.query.per_page ?? "30");
    const page = Number.parseInt(req.query.page ?? "1");
    const repo = parseRepoUrl(req.query.repo);
    const pullRequests = await ListPullRequests(repo, per_page, page);
    res.json(pullRequests);

  } catch (err) {
    res.json({ error: err.message ?? err });
  }
};

/**
 * Retrieve specific details about a github repo pull request
 */
export const GetPullRequest = (req: Express.Request, res: Express.Response) => {
  try {
    const { repo } = req.query;
    const { pr } = req.params;
    
  } catch (err) {
    res.json({ error: err.message ?? err });
  }
};