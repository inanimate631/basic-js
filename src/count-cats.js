const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mass) {
  let counter = 0
  mass.forEach((value) => {
    if (value.includes('^^')) {
      while (value.includes('^^')) {
        counter++
        value.splice(value.indexOf('^^'), 1)
      }
    }
  })
  return counter
}

module.exports = {
  countCats
};
