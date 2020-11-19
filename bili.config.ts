import { Config } from "bili";

const config: Config = {
  input: "src/index.tsx",
  output: {
    format: ["es", "module", "umd"],
    moduleName: "ReactHightlightWords",
    sourceMap: false,
    minify: true,
  },
};

export default config;
