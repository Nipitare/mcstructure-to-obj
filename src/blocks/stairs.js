import { getAdjacentDirection, createCuboidFromBoundingBox } from "../utils/utils.js"

const stairs = {
    model(x, y, z, vert, states) {
        const isUpsideDown = states.vanilla.upside_down_bit.value
        const direction = { 0: 'east', 1: 'west', 2: 'south', 3: 'north' }[states.vanilla.weirdo_direction.value]
        const curve = states.generated

        let x1 = 0
        let x2 = 0
        let z1 = 0
        let z2 = 0
        let returnCode = ''

        if (isUpsideDown == 1) {
            returnCode += 'o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 1, y1: 0.5, y2: 1, z1: 0, z2: 1}, vert)
            vert += 8
            y -= 0.5
        } else {
            returnCode += 'o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 1, y1: 0, y2: 0.5, z1: 0, z2: 1}, vert)
            vert += 8
        }   
        
        if (curve.curveType == 'outside') {
            if ((direction == 'north' && curve.curveDirection == 'east') || (direction == 'east' && curve.curveDirection == 'north')) {
                x2 = 1
                z2 = .5

                returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.5, x2: 1, y1: 0.5, y2: 1, z1: 0.5, z2: 1}, vert)
                vert += 8 
            }

            if ((direction == 'north' && curve.curveDirection == 'west') || (direction == 'west' && curve.curveDirection == 'north')) {
                x2 = 1
                z2 = .5

                returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 0.5, y1: 0.5, y2: 1, z1: 0.5, z2: 1}, vert)
                vert += 8
            }
            
            if ((direction == 'east' && curve.curveDirection == 'south') || (direction == 'south' && curve.curveDirection == 'east')) {
                x2 = 1
                z1 = 0.5
                z2 = 1

                returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0.5, x2: 1, y1: 0.5, y2: 1, z1: 0, z2: 0.5}, vert)
                vert += 8
            }

            if ((direction == 'south' && curve.curveDirection == 'west') || (direction == 'west' && curve.curveDirection == 'south')) {
                x2 = 1
                z1 = 0.5
                z2 = 1

                returnCode += createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 0.5, y1: 0.5, y2: 1, z1: 0, z2: 0.5}, vert)
                vert += 8
            }
        }

        if (curve.curveType == 'inside') {
            if ((direction == 'north' && curve.curveDirection == 'east') || (direction == 'east' && curve.curveDirection == 'north')) {
                x1 = 0.5
                x2 = 1
                z2 = 0.5
            }

            if ((direction == 'north' && curve.curveDirection == 'west') || (direction == 'west' && curve.curveDirection == 'north')) {
                x2 = 0.5
                z2 = 0.5
            }

            if ((direction == 'east' && curve.curveDirection == 'south') || (direction == 'south' && curve.curveDirection == 'east')) {
                x1 = 0.5
                x2 = 1
                z1 = 0.5
                z2 = 1
            }

            if ((direction == 'south' && curve.curveDirection == 'west') || (direction == 'west' && curve.curveDirection == 'south')) {
                x2 = 0.5
                z1 = 0.5
                z2 = 1
            }
        }

        if (curve.curveType == null) {
            switch (direction) {
                case 'north': {
                    x2 = 1
                    z2 = .5
                    break
                }                
                case 'east': {
                    x1 = 0.5
                    x2 = 1
                    z2 = 1
                    break
                }
                case 'south': {
                    x2 = 1
                    z1 = 0.5
                    z2 = 1
                    break
                }                
                case 'west': {
                    x2 = .5
                    z2 = 1
                    break
                }
            }
        }

        returnCode += createCuboidFromBoundingBox(x, y, z, {x1, x2, y1: 0.5, y2: 1, z1, z2}, vert)
        vert += 8

        return [returnCode, vert]
    },
    states(currentBlock, allBlocks) {
        let states = { 'curveType': null, 'curveDirection': null }
        const currentDirection = { 0: 'east', 1: 'west', 2: 'south', 3: 'north' }[currentBlock.blockStates.vanilla.weirdo_direction.value]
        const {x, y, z} = currentBlock.cords

        allBlocks.forEach(block => {
            if (block.group == 'stairs') {
                const blockDirection = { 0: 'east', 1: 'west', 2: 'south', 3: 'north' }[block.blockStates.vanilla.weirdo_direction.value]
                const adjacentDirection = getAdjacentDirection(currentBlock.cords, block.cords)

                if (adjacentDirection == 'none' || currentBlock.blockStates.vanilla.upside_down_bit.value != block.blockStates.vanilla.upside_down_bit.value) return

                // Key: currentDirection|adjacentDirection|blockDirection
                const allPossibleCurves = {
                    'north|north|east': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'north|north|west': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'north|south|east': { 'curveType': 'outside', 'curveDirection': blockDirection },
                    'north|south|west': { 'curveType': 'outside', 'curveDirection': blockDirection },
                    'east|east|north': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'east|east|south': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'east|west|north': { 'curveType': 'outside', 'curveDirection': blockDirection },
                    'east|west|south': { 'curveType': 'outside', 'curveDirection': blockDirection },
                    'south|south|east': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'south|south|west': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'south|north|east': { 'curveType': 'outside', 'curveDirection': blockDirection },
                    'south|north|west': { 'curveType': 'outside', 'curveDirection': blockDirection },
                    'west|west|north': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'west|west|south': { 'curveType': 'inside', 'curveDirection': blockDirection },
                    'west|east|north': { 'curveType': 'outside', 'curveDirection': blockDirection },
                    'west|east|south': { 'curveType': 'outside', 'curveDirection': blockDirection }
                }

                states = allPossibleCurves[`${currentDirection}|${adjacentDirection}|${blockDirection}`] ?? states
            }
        })
        return states
    }
}

export default stairs