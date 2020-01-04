module.exports = {
    "extends": [
        "@the-unicorns/eslint-config-react"
    ],
    "rules": {
        "no-unused-vars": ["warn", {"argsIgnorePattern": "^_"}],
        "@typescript-eslint/no-unused-vars": ["warn", {"argsIgnorePattern": "^_"}]
    }
};
