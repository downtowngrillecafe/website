const Cache = require('@11ty/eleventy-cache-assets');

/**
 * 
 * Grabs the remote data for breakfast items and
 * returns back an array of objects
 * 
 * @returns {Array} Empty array of objects
 */
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data 
    const {items} = await Cache(
      'https://downtowngrille.cafe/api/breakfast.json', // TODO: Create json file for breakfast items
      {
        duration: '1d', // 1 day
        type: 'json'
      }
    );

    return items;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return[];
  }
};