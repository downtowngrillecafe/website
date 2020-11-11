module.exports = config => {

  // Create a filter to handle allergen tags
  config.addFilter("check", function(allergen) {
    return allergen ? allergen.slice(0, 1).toUpperCase() : false;
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Set the directories to pass through to the 'dist' folder
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/css/');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};