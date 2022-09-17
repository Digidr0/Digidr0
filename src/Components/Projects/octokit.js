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
