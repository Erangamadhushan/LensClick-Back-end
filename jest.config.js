/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  // Where tests live
  testMatch: ["**/__test__/**/*.test.ts"],

  // Setup file
  setupFilesAfterEnv: ["<rootDir>/__test__/setup.ts"],

  clearMocks: true,
};
