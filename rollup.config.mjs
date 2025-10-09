import resolve from'@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" with { type: "json" };
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
        peerDepsExternal(),
        url({
          include: ['**/*.woff', '**/*.woff2', '**/*.ttf'], // Include font file types
          limit: Infinity, // Optionally, set a limit to embed as data URI
          fileName: '[dirname][name][extname]' // Control output file name and path
        }),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
      copy({
        targets: [
          {
            src: "src/fonts/*",
            dest: "./dist/fonts",
          }
        ],
      })
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];