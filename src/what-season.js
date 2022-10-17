const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date !== undefined) {
    if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')
    const moon = date.getMonth()
    let season
    if (moon < 2) {
      season = 'winter'
    } else if (moon >= 2 && moon < 5) {
      season = 'spring'
    } else if (moon >= 5 && moon < 8) {
      season = 'summer'
    } else if (moon >= 8 && moon < 11) {
      season = 'autumn'
    } else if (moon === 11) {
      season = 'winter'
    }
    return season
  }
  return 'Unable to determine the time of year!'
}

module.exports = {
  getSeason
};
