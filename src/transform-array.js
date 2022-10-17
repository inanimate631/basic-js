const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  const actionValue = [], actionIndex = []
  const newArr = arr.filter((value, index) => {
    if (typeof value === 'string') {
      if (!isNaN(value)) {
        return value
      }
      if (value.split`-`[2] !== 'double' && value.split`-`[2] !== 'discard') {
        return value
      } else {
        actionValue.push(value.split`-`)
        actionIndex.push(index)
      }
    } else {
      return value
    }
  })
  actionIndex.forEach((value, index) => {
    if (index > 0) {
      actionIndex.splice(index, 1, actionIndex[index] - index)
    }
  })
  if (actionIndex[1] - actionIndex[0] === 1) {
    if (actionValue[0][2] === 'discard' && actionValue[0][3] === 'next' && actionValue[1][3] === 'prev') {
      newArr.splice(actionIndex[0], 1)
      actionIndex.splice(0, actionIndex.length)
      actionValue.slice(0, actionValue.length)
    }
  }
  actionValue.forEach((value, index) => {
    if (actionIndex[index] <= newArr.length) {
      if (actionIndex[index] === newArr.length) {
        if (value[3] === 'next') {
          return false
        } else {
          if (actionIndex[index] === 0) {
            if (value[3] === 'prev') {
              return false
            }
            if (value[2] === 'double') {
              if (value[3] === 'prev') {
                newArr.splice(actionIndex[index] - 1, 0, newArr[actionIndex[index] - 1])
              } else if (value[3] === 'next') {
                newArr.splice(actionIndex[index], 0, newArr[actionIndex[index]])
              }
            } else if (value[2] === 'discard') {
              if (value[3] === 'prev') {
                newArr.splice(actionIndex[index] - 1, 1)
              } else if (value[3] === 'next') {
                newArr.splice(actionIndex[index], 1)
              }
            }
          } else {
            if (value[2] === 'double') {
              if (value[3] === 'prev') {
                newArr.splice(actionIndex[index] - 1, 0, newArr[actionIndex[index] - 1])
              } else if (value[3] === 'next') {
                newArr.splice(actionIndex[index], 0, newArr[actionIndex[index]])
              }
            } else if (value[2] === 'discard') {
              if (value[3] === 'prev') {
                newArr.splice(actionIndex[index] - 1, 1)
              } else if (value[3] === 'next') {
                newArr.splice(actionIndex[index], 1)
              }
            }
          }
        }
      } else {
        if (actionIndex[index] === 0) {
          if (value[3] === 'prev') {
            return false
          }
          if (value[2] === 'double') {
            if (value[3] === 'prev') {
              newArr.splice(actionIndex[index] - 1, 0, newArr[actionIndex[index] - 1])
            } else if (value[3] === 'next') {
              newArr.splice(actionIndex[index], 0, newArr[actionIndex[index]])
            }
          } else if (value[2] === 'discard') {
            if (value[3] === 'prev') {
              newArr.splice(actionIndex[index] - 1, 1)
            } else if (value[3] === 'next') {
              newArr.splice(actionIndex[index], 1)
            }
          }
        } else {
          if (value[2] === 'double') {
            if (value[3] === 'prev') {
              newArr.splice(actionIndex[index] - 1, 0, newArr[actionIndex[index] - 1])
            } else if (value[3] === 'next') {
              newArr.splice(actionIndex[index], 0, newArr[actionIndex[index]])
            }
          } else if (value[2] === 'discard') {
            if (value[3] === 'prev') {
              newArr.splice(actionIndex[index] - 1, 1)
            } else if (value[3] === 'next') {
              newArr.splice(actionIndex[index], 1)
            }
          }
        }
      }
    }
  })
  return newArr
}

module.exports = {
  transform
};
