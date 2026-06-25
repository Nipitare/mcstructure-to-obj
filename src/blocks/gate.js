import { createCuboidFromBoundingBox, rotateCuboidToDirection } from "../utils/utils.js"

const gate = {
    model(x, y, z, vert, states) {
        const isInWall = states.vanilla.in_wall_bit.value
        const isOpen = states.vanilla.open_bit.value
        const direction = states.vanilla['minecraft:cardinal_direction'].value
        
        let returnCode = 'o Cube'
        const closedGateVertexCords = [
            { x1: 0, x2: 0.125, y1: 0.3125, y2: 1, z1: 0.4375, z2: 0.5625 },
            { x1: 0.875, x2: 1, y1: 0.3125, y2: 1, z1: 0.4375, z2: 0.5625 },
            { x1: 0.125, x2: 0.875, y1: 0.75, y2: 0.9375, z1: 0.4375, z2: 0.5625 },
            { x1: 0.125, x2: 0.875, y1: 0.375, y2: 0.5625, z1: 0.4375, z2: 0.5625 },
            { x1: 0.375, x2: 0.625, y1: 0.5625, y2: 0.75, z1: 0.4375, z2: 0.5625 }
        ]
        const openGateVertexCords = [
            { x1: 0, x2: 0.125, y1: 0.3125, y2: 1, z1: 0.4375, z2: 0.5625 },
            { x1: 0.875, x2: 1, y1: 0.3125, y2: 1, z1: 0.4375, z2: 0.5625 },
            { x1: 0, x2: 0.125, y1: 0.75, y2: 0.9375, z1: 0.0625, z2: 0.4375 },
            { x1: 0, x2: 0.125, y1: 0.375, y2: 0.5625, z1: 0.0625, z2: 0.4375 },
            { x1: 0.875, x2: 1, y1: 0.75, y2: 0.9375, z1: 0.0625, z2: 0.4375 },
            { x1: 0.875, x2: 1, y1: 0.375, y2: 0.5625, z1: 0.0625, z2: 0.4375 },
            { x1: 0, x2: 0.125, y1: 0.5625, y2: 0.75, z1: 0.0625, z2: 0.1875 },
            { x1: 0.875, x2: 1, y1: 0.5625, y2: 0.75, z1: 0.0625, z2: 0.1875 }
        ]

        if (isInWall) y -= 0.1875

        if (isOpen) {
            for (let i = 0; i < openGateVertexCords.length; i++) {
                returnCode += createCuboidFromBoundingBox(x, y, z, rotateCuboidToDirection(openGateVertexCords, direction)[i], vert)
                vert += 8
            }
        } else {
            for (let i = 0; i < closedGateVertexCords.length; i++) {
                returnCode += createCuboidFromBoundingBox(x, y, z, rotateCuboidToDirection(closedGateVertexCords, direction)[i], vert)
                vert += 8
            }
        }    
        //console.log(rotateModel(closedGateVertexCords, 'east'))

        return [returnCode, vert]
    }
}

export default gate