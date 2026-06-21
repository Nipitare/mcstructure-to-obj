export function getAdjacentDirection(currentBlockCords, surroundingBlockCords) {
    if (currentBlockCords.x == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && (currentBlockCords.z - 1) == surroundingBlockCords.z) return 'north'
    if ((currentBlockCords.x + 1) == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && currentBlockCords.z == surroundingBlockCords.z) return 'east'
    if (currentBlockCords.x == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && (currentBlockCords.z + 1) == surroundingBlockCords.z) return 'south'
    if ((currentBlockCords.x - 1) == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && currentBlockCords.z == surroundingBlockCords.z) return 'west'
    return 'none'
}

export function createCubiod(x, y, z, x1, x2, y1, y2, z1, z2, vert) {
    return `
        v ${x+x1} ${y+y1} ${z+z1}
        v ${x+x1} ${y+y2} ${z+z1}
        v ${x+x1} ${y+y1} ${z+z2}
        v ${x+x1} ${y+y2} ${z+z2}
        v ${x+x2} ${y+y1} ${z+z1}
        v ${x+x2} ${y+y2} ${z+z1}
        v ${x+x2} ${y+y1} ${z+z2}
        v ${x+x2} ${y+y2} ${z+z2}
        
        f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
        f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
        f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
        f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
        f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
        f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
}