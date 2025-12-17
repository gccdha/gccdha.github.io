const markdownIt = require("markdown-it");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");


module.exports = async function(eleventyConfig) {
  let options = {
    html:true
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("CNAME");
};

module.exports.config = {
  dir: {
    input: "src",
    output: "_site"
  }
};
