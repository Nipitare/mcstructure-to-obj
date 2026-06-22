export function getAdjacentDirection(currentBlockCords, surroundingBlockCords) {
    if (currentBlockCords.x == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && (currentBlockCords.z - 1) == surroundingBlockCords.z) return 'north'
    if ((currentBlockCords.x + 1) == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && currentBlockCords.z == surroundingBlockCords.z) return 'east'
    if (currentBlockCords.x == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && (currentBlockCords.z + 1) == surroundingBlockCords.z) return 'south'
    if ((currentBlockCords.x - 1) == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && currentBlockCords.z == surroundingBlockCords.z) return 'west'
    return 'none'
}

export function createCuboid(x, y, z, vertexCords, vert) {
    return `
        v ${x+vertexCords.x1} ${y+vertexCords.y1} ${z+vertexCords.z1}
        v ${x+vertexCords.x1} ${y+vertexCords.y2} ${z+vertexCords.z1}
        v ${x+vertexCords.x1} ${y+vertexCords.y1} ${z+vertexCords.z2}
        v ${x+vertexCords.x1} ${y+vertexCords.y2} ${z+vertexCords.z2}
        v ${x+vertexCords.x2} ${y+vertexCords.y1} ${z+vertexCords.z1}
        v ${x+vertexCords.x2} ${y+vertexCords.y2} ${z+vertexCords.z1}
        v ${x+vertexCords.x2} ${y+vertexCords.y1} ${z+vertexCords.z2}
        v ${x+vertexCords.x2} ${y+vertexCords.y2} ${z+vertexCords.z2}
        
        f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
        f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
        f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
        f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
        f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
        f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
}

export function rotateModel(model, direction) {
    const directionToAngle = {
        'north': 0,
        'east': 0.5 * Math.PI,
        'south': Math.PI,
        'west': 1.5 * Math.PI
    }
    const angle = directionToAngle[direction]

    const xCenter = 0.5
    const zCenter = 0.5
    
    let rotatedModel = []

    for (let i = 0; i < model.length; i++) {

        const x = [
            (xCenter + (model[i].x1 - xCenter) * Math.cos(angle) - (model[i].z1 - zCenter) * Math.sin(angle)).toFixed(6),
            (xCenter + (model[i].x2 - xCenter) * Math.cos(angle) - (model[i].z2 - zCenter) * Math.sin(angle)).toFixed(6)
        ]

        const z = [
            (zCenter + (model[i].x1 - xCenter) * Math.sin(angle) + (model[i].z1 - zCenter) * Math.cos(angle)).toFixed(6),
            (zCenter + (model[i].x2 - xCenter) * Math.sin(angle) + (model[i].z2 - zCenter) * Math.cos(angle)).toFixed(6)
        ]

        const x1 = Math.min(x[0], x[1])
        const x2 = Math.max(x[0], x[1])

        const z1 = Math.min(z[0], z[1])
        const z2 = Math.max(z[0], z[1])

        rotatedModel.push({ x1, x2, y1: model[i].y1, y2: model[i].y2, z1, z2 })
    }
        return rotatedModel
}