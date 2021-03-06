module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/testConfig/fileTransformer.js"
    },
    testRegex: "tests/.*\\.(test|spec)\\.(jsx?|tsx?)$",
    verbose: true,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    },
    coverageReporters: ["html", "lcovonly", "text"],
    coverageDirectory: "coverage",
    restoreMocks: true,
    clearMocks: true,
    displayName: {
        name: ">",
        color: "green"
    },
    reporters: [
        "default",
        [
            "jest-junit",
            {
                outputDirectory: "test-report",
                outputName: "result.xml",
                suiteName: "Toy Robot Tests",
                usePathForSuiteName: true,
                classNameTemplate: "{classname}",
                titleTemplate: "{classname} > {title}",
                includeConsoleOutput: true
            }
        ],
    ],
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/index.tsx",
        "!src/**/__mocks__",
        "!src/**/tests",
        "!src/testing/**"
    ],
    setupFilesAfterEnv: ["<rootDir>/testConfig/setupTests.ts"]
};
