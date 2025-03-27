module.exports = function (eleventyConfig) {
  // Copy `src/styles` to `dist/styles`
  eleventyConfig.addPassthroughCopy("src/styles");

  // Copy fonts
  eleventyConfig.addPassthroughCopy("src/fonts");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
