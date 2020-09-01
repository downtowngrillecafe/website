/**
 * Takes a collection and returns it back in display order
 * 
 * @param {Array} collection the 11ty collection
 * @reutrns {Array} the sorted collection
 */
module.exports = collection =>
  collection.sort((a, b) =>
    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
  );