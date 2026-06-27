const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "planning-design-agent-command-center";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = repositoryName.endsWith(".github.io");
const basePath = isGithubPages && !isUserOrOrgPage ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
