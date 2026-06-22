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