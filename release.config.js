module.exports = {
    branches: ["main", { name: "beta", channel: "beta", prerelease: true }],
    repositoryUrl: "https://github.com/SuhasParameshwara/CLI-Repo.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        {
            preset: "conventionalcommits",
            releaseRules: [
                { breaking: true, release: "major" },
                { type: "docs", scope: "README", release: "patch" },
                { type: "perf", release: "patch" },
                { type: "fix", release: "patch" },
                { type: "deps", release: "patch" },
                { type: "feat", release: "minor" },
                { type: "chore", release: "patch" },
            ],
            parserOpts: {
                mergePattern: "^Merged PR (\\d+): (\\w*)(?:\\(([\\w\\$\\.\\-\\* ]*)\\))?\\: (.*)$",
                mergeCorrespondence: ["id", "type", "scope", "subject"],
                noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
            },
        },
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
            },
        ],
        [
            "semantic-release-ado",
            {
                setOnlyOnRelease: true,
            },
        ],
        [
            "@semantic-release/git",
            {
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
                assets: ["CHANGELOG.md"],
            },
        ],
    ],
};
