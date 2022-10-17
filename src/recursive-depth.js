const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(a) {
    let counter = 0
    function count(mass) {
      for (let i = 0; i < mass.length; i++) {
        if (typeof (mass[i]) !== 'object') {
          counter++
        } else if (typeof (mass[i]) === 'object') {
          counter++
          count(mass[i])
        }
      }
      return counter
    }
    return counter += count(a)
  }
}

module.exports = {
  DepthCalculator
};
