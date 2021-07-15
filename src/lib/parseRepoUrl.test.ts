import parseRepoUrl from "./parseRepoUrl";

test("parsing full url", () => {
  const url = "https://github.com/mongodb/mongo";
  const result = parseRepoUrl(url);
  expect(result.user).toBe("mongodb");
  expect(result.repo).toBe("mongo");
})

test("parsing schema-less url", () => {
  const url = "github.com/mongodb/mongo";
  const result = parseRepoUrl(url);
  expect(result.user).toBe("mongodb");
  expect(result.repo).toBe("mongo");
})

test("parsing user/repo format", () => {
  const url = "mongodb/mongo";
  const result = parseRepoUrl(url);
  expect(result.user).toBe("mongodb");
  expect(result.repo).toBe("mongo");
})

test("throws when parsing an invalid repo url", () => {
  expect(() => parseRepoUrl("https://github.com/invalid_url")).toThrow()
  expect(() => parseRepoUrl("test.com")).toThrow()
  expect(() => parseRepoUrl("")).toThrow()
})