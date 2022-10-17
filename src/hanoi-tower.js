const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNum, turnSpeed) {
  let movesCounter = 1
  let turnTime
  while (diskNum > 1) {
    movesCounter = movesCounter * 2 + 1
    diskNum--
  }
  turnTime = Math.floor(movesCounter / (turnSpeed / 3600))
  return { turns: movesCounter, seconds: turnTime }
}

module.exports = {
  calculateHanoi
};
