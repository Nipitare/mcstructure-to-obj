import { createCubiod } from "../utils/utils.js"

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
            return ['o Cube' + createCubiod(x, y, z, 0.3125, 0.6875, 0, 0.8125, 0, 1, vert), vert += 8]
        }
        if (!hasPost && isEastShort && isWestShort) {
            return ['o Cube' + createCubiod(x, y, z, 0, 1, 0, 0.8125, 0.3125, 0.6875, vert), vert += 8]
        }
        if (!hasPost && isNorthTall && isSouthTall) {
            return ['o Cube' + createCubiod(x, y, z, 0.3125, 0.6875, 0, 1, 0, 1, vert), vert += 8]
        }
        if (!hasPost && isEastTall && isWestTall) {
            return ['o Cube' + createCubiod(x, y, z, 0, 1, 0, 1, 0.3125, 0.6875, vert), vert += 8]
        }

        returnCode += 'o Cube' + createCubiod(x, y, z, 0.25, 0.75, 0, 1, 0.25, 0.75, vert)
        vert += 8

        if (isNorthShort) {
            returnCode += createCubiod(x, y, z, 0.3125, 0.6875, 0, 0.8125, 0, 0.25, vert)
            vert += 8
        }
        if (isEastShort) {
            returnCode += createCubiod(x, y, z, 0.75, 1, 0, 0.8125, 0.3125, 0.6875, vert)
            vert += 8
        }
        if (isSouthShort) {
            returnCode += createCubiod(x, y, z, 0.3125, 0.6875, 0, 0.8125, 0.75, 1, vert)
            vert += 8
        }
        if (isWestShort) {
            returnCode += createCubiod(x, y, z, 0, 0.25, 0, 0.8125, 0.3125, 0.6875, vert)
            vert += 8
        }
        if (isNorthTall) {
            returnCode += createCubiod(x, y, z, 0.3125, 0.6875, 0, 1, 0, 0.25, vert)
            vert += 8
        }
        if (isEastTall) {
            returnCode += createCubiod(x, y, z, 0.75, 1, 0, 1, 0.3125, 0.6875, vert)
            vert += 8
        }
        if (isSouthTall) {
            returnCode += createCubiod(x, y, z, 0.3125, 0.6875, 0, 1, 0.75, 1, vert)
            vert += 8
        }
        if (isWestTall) {
            returnCode += createCubiod(x, y, z, 0, 0.25, 0, 1, 0.3125, 0.6875, vert)
            vert += 8
        }

        return [returnCode, vert]
    }
}

export default wall