import tailwindcss from "tailwindcss";
import postcssNested from "postcss-nested";
import postcssMixins from "postcss-mixins";
import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";
import postcssReporter from "postcss-reporter";
import cssnano from "cssnano";

export default {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    postcssNested,
    postcssMixins,
    postcssPresetEnv,
    autoprefixer,
    postcssReporter,
    cssnano,
  ],
};
