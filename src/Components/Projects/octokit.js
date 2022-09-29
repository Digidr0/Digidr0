import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
export default async function GetContent(owner, repo, path) {
  const octokit = new Octokit({
    auth: "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",
  });

  const result = await octokit.request("/repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: path,
  });

return atob(result.data.content);
}
