module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        "type-enum": [2, "always", ["docs", "feat", "fix", "refactor"]],
        "subject-case": [2, "always", ["sentence-case"]],
        "scope-empty": [2,"always"],
    }
}