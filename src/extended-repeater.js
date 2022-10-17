const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const outStr = []
  let separator = '+'
  let repeat = 1
  let add
  let addd
  if (options.hasOwnProperty('addition')) {
    add = options.addition
    addd = add
  }
  if (options.additionRepeatTimes > 1) {
    if (options.additionSeparator) {
      addd = options.additionSeparator + add
    } else {
      addd = '|' + add
    }
  }
  if (options.additionRepeatTimes > 1) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      add += addd
    }
  }
  if (options.repeatTimes > 1) {
    repeat = options.repeatTimes
  }
  if (options.separator) {
    separator = options.separator
  }
  for (let i = 0; i < repeat; i++) {
    if (options.addition !== undefined) {
      outStr.push(str + add)
    } else {
      outStr.push(str)
    }
  }
  return outStr.join(separator)
}
module.exports = {
  repeater
};
