const { air } = require('./air')
const { fence } = require('./fence')
const { fullBlock } = require('./fullBlock')
const { slab } = require('./slab')
const { stairs } = require('./stairs')
const { wall } = require('./wall')

const blockData = {
    air,
    fence,
    fullBlock,
    slab,
    stairs,
    wall
}

module.exports = { blockData }
