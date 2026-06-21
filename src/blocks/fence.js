import { getAdjacentDirection, createCubiod } from "../utils/utils.js"

const fence = {
    model(x, y, z, vert, states) {
        const isEast = states.generated.connection_east
        const isNorth = states.generated.connection_north
        const isWest = states.generated.connection_west
        const isSouth = states.generated.connection_south

        let returnCode = ''

        returnCode += 'o Cube' + createCubiod(x, y, z, 0.375, 0.625, 0, 1, 0.375, 0.625, vert)
        vert += 8

        if (isNorth) {
            returnCode += createCubiod(x, y, z, 0.375, 0.625, 0.75, 0.9375, 0, 0.375, vert)
            vert += 8

            returnCode += createCubiod(x, y, z, 0.375, 0.625, 0.375, 0.5625, 0, 0.375, vert)
            vert += 8
        }

        if (isEast) {
            returnCode += createCubiod(x, y, z, 0.625, 1, 0.75, 0.9375, 0.375, 0.625, vert)
            vert += 8

            returnCode += createCubiod(x, y, z, 0.625, 1, 0.375, 0.5625, 0.375, 0.625, vert)
            vert += 8            
        }

        if (isSouth) {
            returnCode += createCubiod(x, y, z, 0.375, 0.625, 0.75, 0.9375, 0.625, 1, vert)
            vert += 8

            returnCode += createCubiod(x, y, z, 0.375, 0.625, 0.375, 0.5625, 0.625, 1, vert)
            vert += 8
        }

        if (isWest) {
            returnCode += createCubiod(x, y, z, 0, 0.375, 0.75, 0.9375, 0.375, 0.625, vert)
            vert += 8

            returnCode += createCubiod(x, y, z, 0, 0.375, 0.375, 0.5625, 0.375, 0.625, vert)
            vert += 8     
        }

        return [returnCode, vert]
    },
    states(currentBlock, allBlocks) {
        let states = { 'connection_north': false, 'connection_east': false, 'connection_south': false, 'connection_west': false }
        const {x, y, z} = currentBlock.cords

        allBlocks.forEach(block => {
            if (block.group == 'air') return

            switch (getAdjacentDirection(currentBlock.cords, block.cords)) {
                case "north": {
                    states.connection_north = true
                    break
                }
                case "east": {
                    states.connection_east = true
                    break
                }
                case "south": {
                    states.connection_south = true
                    break
                }
                case "west": {
                    states.connection_west = true
                    break
                }
            }
        })

        return states
    }
}

export default fence