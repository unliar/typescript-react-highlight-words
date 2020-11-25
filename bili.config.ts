import { Config } from "bili"

const config: Config = {
  input: "src/index.tsx",
  output: {
    format: ["cjs", "esm"],
    moduleName: "ReactHightlightWords",
    sourceMap: false,
    minify: true,
  },
}

export default config
