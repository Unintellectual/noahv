module.exports = function (eleventyConfig) {
  // Copy `src/styles` to `dist/styles`
  eleventyConfig.addPassthroughCopy("src/styles");

  // Copy fonts
  eleventyConfig.addPassthroughCopy("src/fonts");


  // Optional: Add debug logging
  eleventyConfig.on("eleventy.before", ({ runMode }) => {
    console.log("Eleventy is starting up!");
  });

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
