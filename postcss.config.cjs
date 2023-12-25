const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    require("postcss-nested"),
    require("postcss-mixins"),
    require("postcss-preset-env"),
    autoprefixer,
    require("postcss-reporter"),
    require("cssnano"),
  ],
};

module.exports = config;
