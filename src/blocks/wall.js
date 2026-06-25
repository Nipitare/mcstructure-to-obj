import { createCuboidFromBoundingBox } from "../utils/utils.js"

const wall = {
    model(x, y, z, vert, states) {
        const isEastShort = states.vanilla.wall_connection_type_east.value == 'short'
        const isSouthShort = states.vanilla.wall_connection_type_south.value == 'short'
        const isWestShort = states.vanilla.wall_connection_type_west.value == 'short'
        const isNorthShort = states.vanilla.wall_connection_type_north.value == 'short'
        
        const isEastTall = states.vanilla.wall_connection_type_east.value == 'tall'
        const isSouthTall = states.vanilla.wall_connection_type_south.value == 'tall'
        const isWestTall = states.vanilla.wall_connection_type_west.value == 'tall'
        const isNorthTall = states.vanilla.wall_connection_type_north.value == 'tall'

        const hasPost = states.vanilla.wall_post_bit.value == 1

        let returnCode = ''

        if (!hasPost && isNorthShort && isSouthShort) {
            return ['o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0.3125, x2: 0.6875, y1: 0, y2: 0.8125, z1: 0, z2: 1 }, vert), vert += 8]
        }
        if (!hasPost && isEastShort && isWestShort) {
            return ['o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 1, y1: 0, y2: 0.8125, z1: 0.3125, z2: 0.6875 }, vert), vert += 8]
        }
        if (!hasPost && isNorthTall && isSouthTall) {
            return ['o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0.3125, x2: 0.6875, y1: 0, y2: 1, z1:  0, z2: 1 }, vert), vert += 8]
        }
        if (!hasPost && isEastTall && isWestTall) {
            return ['o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 1, y1: 0, y2: 1, z1: 0.3125, z2: 0.6875 }, vert), vert += 8]
        }

        returnCode += 'o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0.25, x2: 0.75, y1: 0, y2: 1, z1: 0.25, z2: 0.75 }, vert)
        vert += 8

        if (isNorthShort) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.3125, x2: 0.6875, y1: 0, y2: 0.8125, z1: 0, z2: 0.25 }, vert)
            vert += 8
        }
        if (isEastShort) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.75, x2: 1, y1: 0, y2: 0.8125, z1: 0.3125, z2: 0.6875 }, vert)
            vert += 8
        }
        if (isSouthShort) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.3125, x2: 0.6875, y1: 0, y2: 0.8125, z1: 0.75, z2: 1 }, vert)
            vert += 8
        }
        if (isWestShort) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 0.25, y1: 0, y2: 0.8125, z1: 0.3125, z2: 0.6875 }, vert)
            vert += 8
        }
        if (isNorthTall) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.3125, x2: 0.6875, y1: 0, y2: 1, z1: 0, z2: 0.25 }, vert)
            vert += 8
        }
        if (isEastTall) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.75, x2: 1, y1: 0, y2: 1, z1: 0.3125, z2: 0.6875 }, vert)
            vert += 8
        }
        if (isSouthTall) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.3125,x2: 0.6875, y1: 0, y2: 1, z1: 0.75, z2: 1 }, vert)
            vert += 8
        }
        if (isWestTall) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 0.25, y1: 0, y2: 1, z1: 0.3125, z2: 0.6875 }, vert)
            vert += 8
        }

        return [returnCode, vert]
    }
}

export default wall