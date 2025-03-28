module.exports = function (eleventyConfig) {
  // Passthrough Copy
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Collections
  eleventyConfig.addCollection("blogs", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blogs/**/*.md");
  });

  eleventyConfig.addCollection("notes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/notes/**/*.md");
  });

  eleventyConfig.addCollection("research", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/research/**/*.md");
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
