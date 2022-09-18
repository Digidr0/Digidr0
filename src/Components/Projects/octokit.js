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
