/**
 * Parses the user/org and repo name from a github url
 * @param url Github repo url, format specified in readme
 */
export default function parseRepoUrl(url: string): string {

  if (typeof url !== "string" || url.length === 0) throw new Error("type error");

  const parsedUrl = new URL(url, "https://github.com");
  const pathParts = parsedUrl.pathname.split("/");
  if (pathParts.length < 2) {
    throw new Error("invalid url format");
  }

  // Last 2 parts of url path are the user and repo
  const user = pathParts[pathParts.length - 2].trim();
  const repo = pathParts[pathParts.length - 1].trim();

  if (user.length === 0 || repo.length === 0) {
    throw new Error("invalid url format");
  }

  return `${user}/${repo}`;
}