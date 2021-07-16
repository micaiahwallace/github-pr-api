import { createSearchQuery } from "./createSearchQuery";
import { ghRequest } from "./ghRequest";

export function ListPullRequests(repo: string, per_page: number, page: number): Promise<any> {
  const options = {
    searchParams: {
      q: createSearchQuery({ repo, type: "pr", state: "open" }),
      page,
      per_page,
    }
  };
  return ghRequest("search/issues", options).json();
}

export function GetPullRequest(repo: string, pr_number: number): Promise<any> {
  const url = `repos/${repo}/pulls/${pr_number}`;
  return ghRequest(url).json();
}