module.exports = config => {
  /* TO BE REMOVED
  * Custom Collections to be removed
  const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
  // Returns breakfast items, sorted by display order
  config.addCollection('breakfast', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/breakfast/*.md'));
  });
  // Returns lunch items, sorted by display order
  config.addCollection('lunch', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/lunch/*.md'));
  });
  // Returns breakfast items, sorted by display order
  config.addCollection('miscellaneous', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/miscellaneous/*.md'));
  });
  */

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