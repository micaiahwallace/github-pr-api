import got from "got";

/**
 * Github request got instance
 */
export const ghRequest = got.extend({
  prefixUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
  }
});