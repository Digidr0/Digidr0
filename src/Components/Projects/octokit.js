import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
export default async function GetContent(owner, repo, path) {
  const octokit = new Octokit({
    auth: process.env.GIT_API_TOKEN,
  });

  const result = await octokit.request("/repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: path,
  });

return atob(result.data.content);
}
