module.exports = config => {
  const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
  // Returns breakfast items, sorted by display order
  config.addCollection('breakfast', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/breakfast/*.md'));
  });
  // Returns lunch items, sorted by display order then filtered by category
  config.addCollection('lunch', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/lunch/*.md')).filter(
      x => x.data.category
    );
  });

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