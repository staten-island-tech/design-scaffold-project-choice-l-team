module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("eldenringblog/media");
  return {
    dir: {
      input: "eldenringblog",
      output: "dist",
    },
  };
};
