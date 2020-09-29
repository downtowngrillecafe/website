module.exports = config => {
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

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Set the directories to pass through to the 'dist' folder
  config.addPassthroughCopy('./src/images/');
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