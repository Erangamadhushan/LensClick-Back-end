import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/__test__/setup.ts"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  clearMocks: true
};

export default config;
