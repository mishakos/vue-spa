module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: "standard",
  plugins: ["vue"],
  extends: ["plugin:vue/essential", "prettier"]
};
