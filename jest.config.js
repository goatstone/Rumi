export default {
  preset: "ts-jest/presets/default-esm", // ESM + TS
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
