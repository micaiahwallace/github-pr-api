import { queryPart, createSearchQuery } from "./createSearchQuery";

test("create query part", () => {
  const result = queryPart("test", "value");
  expect(result).toBe("test:value");
})

test("create search query", () => {
  const result = createSearchQuery({
    type: "pr",
    repo: "user/repo",
    state: "open",
  });
  expect(result).toBe("type:pr repo:user/repo state:open");
})