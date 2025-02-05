/**
 * Accepts any number of strings and a range of cells as arguments and checks if the range contains all the strings, even if they're in different cells.
 * @param {array} range The range to check.
 * @param {string} searchStrings The strings to check against.
 * @return Logical test if the string is in the range.
 * @customfunction
 */
function rangeContainsAll(range, ...searchStrings) {
  let foundStrings = new Set();

  for (let row of range) {
    for (let cell of row) {
      if (searchStrings.includes(cell)) {
        foundStrings.add(cell);
      }
    }
  }

  return searchStrings.every(str => foundStrings.has(str));
}
