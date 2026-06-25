import { getAdjacentDirection, createCuboidFromBoundingBox } from "../utils/utils.js"

const fence = {
    model(x, y, z, vert, states) {
        const isEast = states.generated.connection_east
        const isNorth = states.generated.connection_north
        const isWest = states.generated.connection_west
        const isSouth = states.generated.connection_south

        let returnCode = ''

        returnCode += 'o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0.375, x2: 0.625, y1: 0, y2: 1, z1: 0.375, z2: 0.625 }, vert)
        vert += 8

        if (isNorth) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.375, x2: 0.625, y1: 0.75, y2: 0.9375, z1: 0, z2: 0.375 }, vert)
            vert += 8

            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.375, x2: 0.625, y1: 0.375, y2: 0.5625, z1: 0, z2: 0.375}, vert)
            vert += 8
        }

        if (isEast) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.625, x2: 1, y1: 0.75, y2: 0.9375, z1: 0.375, z2: 0.625}, vert)
            vert += 8

            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.625, x2: 1, y1: 0.375, y2: 0.5625, z1: 0.375, z2: 0.625}, vert)
            vert += 8            
        }

        if (isSouth) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.375, x2: 0.625, y1: 0.75, y2: 0.9375, z1: 0.625, z2: 1}, vert)
            vert += 8

            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.375, x2: 0.625, y1: 0.375, y2: 0.5625, z1: 0.625, z2: 1 }, vert)
            vert += 8
        }

        if (isWest) {
            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 0.375, y1: 0.75, y2: 0.9375, z1: 0.375, z2: 0.625 }, vert)
            vert += 8

            returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 0.375, y1: 0.375, y2: 0.5625, z1: 0.375, z2: 0.625 }, vert)
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