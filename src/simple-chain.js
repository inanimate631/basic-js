const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) value = ''
    this.chain.push(`( ${value} )`)
    return chainMaker
  },
  removeLink(position) {
    if (position % 1 !== 0 || position > this.chain.length || position <= 0) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return chainMaker
  },
  reverseChain() {
    this.chain.reverse()
    return chainMaker
  },
  finishChain() {
    return this.chain.splice(0, this.chain.length).join`~~`
  }
};

module.exports = {
  chainMaker
};
