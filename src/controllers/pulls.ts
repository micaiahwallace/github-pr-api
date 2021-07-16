import Express from "express";
import * as Github from "../lib/githubPr";
import parseRepoUrl from "../lib/parseRepoUrl";
import { GetAllPullRequestSchema, GetPullRequestSchema } from "../schema/pulls";

/**
 * Retrieve github repo pull requests
 */
export const GetAllPullRequests = async (req: Express.Request, res: Express.Response) => {
  try {

    const query = GetAllPullRequestSchema.query.validate(req.query);

    if (query.error) {
      res.status(422).json({ error: query.error });
      return;
    }

    const repo = parseRepoUrl(query.value.repo);
    const page = query.value.page as number;
    const per_page = query.value.per_page as number;

    const pullRequests = await Github.ListPullRequests(repo, per_page, page);

    res.json(pullRequests);

  } catch (err) {
    res.json({ error: err.message ?? err });
  }
};

/**
 * Retrieve specific details about a github repo pull request
 */
export const GetPullRequest = async (req: Express.Request, res: Express.Response) => {
  try {

    const query = GetPullRequestSchema.query.validate(req.query);
    const params = GetPullRequestSchema.params.validate(req.params);
    
    if (query.error) {
      res.status(422).json({ error: query.error });
      return;
    }
    
    if (params.error) {
      res.status(422).json({ params: params.error });
      return;
    }

    const repo = parseRepoUrl(query.value.repo);
    const pr = params.value.pr as number;

    const pullRequest = await Github.GetPullRequest(repo, pr);

    res.json(pullRequest);
    
  } catch (err) {
    res.json({ error: err.message ?? err });
  }
};