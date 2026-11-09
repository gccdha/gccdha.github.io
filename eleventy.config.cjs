const markdownIt = require("markdown-it");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");


module.exports = async function(eleventyConfig) {
  //Setting for markdown-it
  let options = {
    html:true
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  //passthrough this file unchanged 
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/assets/fontawesome");
  eleventyConfig.addPassthroughCopy("src/icons/favicon-48x48.png");
  eleventyConfig.addPassthroughCopy("src/resume.pdf");
  // eleventyConfig.addPassthroughCopy("src/pkg/*");
};

module.exports.config = {
  dir: {
    input: "src",
    output: "_site"
  }
};
