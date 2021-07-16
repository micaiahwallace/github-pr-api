export interface CreateQueryOptions {
  type: "pr" | "issue";
  repo: string;
  state: "open" | "closed";
}

export const queryPart = (key: string, value: string) => `${key}:${value}`;

export const createSearchQuery = (opts: CreateQueryOptions): string => {
  const query = [];
  query.push(queryPart("type", opts.type));
  query.push(queryPart("repo", opts.repo));
  query.push(queryPart("state", opts.state));
  return query.join(" ");
}