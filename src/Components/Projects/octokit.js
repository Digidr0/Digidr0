// import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
// import { defineConfig, loadEnv } from "vite";
export default async function GetContent(owner, repo, path) {
  console.log(config);
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GIT_API_TOKEN,
  });

  const result = await octokit.request("/repos/{owner}/{repo}/contents/{path}", {
    owner: owner,
    repo: repo,
    path: path,
  });

return atob(result.data.content);
}
