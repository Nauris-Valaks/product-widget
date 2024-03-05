module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],
};
