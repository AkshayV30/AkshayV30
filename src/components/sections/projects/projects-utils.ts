export const LONG_REPO_NAME_THRESHOLD = 24;

export function getGithubRepoName(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    const parts = pathname.split("/").filter(Boolean);

    return (parts[parts.length - 1] || "GitHub").replace(/\.git$/, "");
  } catch {
    return "GitHub";
  }
}

export function isLongRepoName(url: string): boolean {
  return getGithubRepoName(url).length > LONG_REPO_NAME_THRESHOLD;
}
