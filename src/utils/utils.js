export function getAdjacentDirection(currentBlockCords, surroundingBlockCords) {
    if (currentBlockCords.x == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && (currentBlockCords.z - 1) == surroundingBlockCords.z) return 'north'
    if ((currentBlockCords.x + 1) == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && currentBlockCords.z == surroundingBlockCords.z) return 'east'
    if (currentBlockCords.x == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && (currentBlockCords.z + 1) == surroundingBlockCords.z) return 'south'
    if ((currentBlockCords.x - 1) == surroundingBlockCords.x && currentBlockCords.y == surroundingBlockCords.y && currentBlockCords.z == surroundingBlockCords.z) return 'west'
    return 'none'
}

export function createCuboidFromBoundingBox(x, y, z, boundingBox, vert) {
    return `
        v ${x+boundingBox.x1} ${y+boundingBox.y1} ${z+boundingBox.z1}
        v ${x+boundingBox.x1} ${y+boundingBox.y2} ${z+boundingBox.z1}
        v ${x+boundingBox.x1} ${y+boundingBox.y1} ${z+boundingBox.z2}
        v ${x+boundingBox.x1} ${y+boundingBox.y2} ${z+boundingBox.z2}
        v ${x+boundingBox.x2} ${y+boundingBox.y1} ${z+boundingBox.z1}
        v ${x+boundingBox.x2} ${y+boundingBox.y2} ${z+boundingBox.z1}
        v ${x+boundingBox.x2} ${y+boundingBox.y1} ${z+boundingBox.z2}
        v ${x+boundingBox.x2} ${y+boundingBox.y2} ${z+boundingBox.z2}
        
        f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
        f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
        f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
        f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
        f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
        f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
}

export function rotateCuboidToDirection(vertexCords, direction) {
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

    for (let i = 0; i < vertexCords.length; i++) {

        const x = [
            (xCenter + (vertexCords[i].x1 - xCenter) * Math.cos(angle) - (vertexCords[i].z1 - zCenter) * Math.sin(angle)).toFixed(6),
            (xCenter + (vertexCords[i].x2 - xCenter) * Math.cos(angle) - (vertexCords[i].z2 - zCenter) * Math.sin(angle)).toFixed(6)
        ]

        const z = [
            (zCenter + (vertexCords[i].x1 - xCenter) * Math.sin(angle) + (vertexCords[i].z1 - zCenter) * Math.cos(angle)).toFixed(6),
            (zCenter + (vertexCords[i].x2 - xCenter) * Math.sin(angle) + (vertexCords[i].z2 - zCenter) * Math.cos(angle)).toFixed(6)
        ]

        const x1 = Math.min(x[0], x[1])
        const x2 = Math.max(x[0], x[1])

        const z1 = Math.min(z[0], z[1])
        const z2 = Math.max(z[0], z[1])
        
        rotatedModel.push({ x1, x2, y1: vertexCords[i].y1, y2: vertexCords[i].y2, z1, z2 })
    }
        return rotatedModel
}

export function modelToObj(model, x, y, z, vert) {
    let objCode = 'o Cube \n'

    for (let i = 0; i < model.vertices.length; i++) {
        objCode += `v ${x + model.vertices[i].x} ${y + model.vertices[i].y} ${z + model.vertices[i].z}\n`
    }

    for (let i = 0; i < model.faces.length; i++) {
        objCode += 'f '
        for (let j = 0; j < model.faces[i].length; j++) {
            objCode += `${vert + model.faces[i][j]} `
        }
        objCode += '\n'
    }

    return objCode
}

export function rotateModel(model, angle, axis, pivotPoint) {
    angle = angle * (Math.PI / 180)

    const { xCenter, yCenter, zCenter } = pivotPoint

    let rotatedModel = {}

    switch (axis) {
        case 'X': {
            rotatedModel.vertices = model.vertices.map(vertice => {
                return {
                        x: vertice.x,
                        y: Number((yCenter + (vertice.y - yCenter) * Math.cos(angle) + (vertice.z - zCenter) * Math.sin(angle)).toFixed(6)),
                        z: Number((zCenter - (vertice.y - yCenter) * Math.sin(angle) + (vertice.z - zCenter) * Math.cos(angle)).toFixed(6))
                }
            })
            break
        }
        case 'Y': {
            rotatedModel.vertices = model.vertices.map(vertice => {
                return {
                        x: Number((xCenter + (vertice.x - xCenter) * Math.cos(angle) - (vertice.z - zCenter) * Math.sin(angle)).toFixed(6)),
                        y: vertice.y,
                        z: Number((zCenter + (vertice.x - xCenter) * Math.sin(angle) + (vertice.z - zCenter) * Math.cos(angle)).toFixed(6))
                }
            })
            break
        }
        case 'Z': {
            rotatedModel.vertices = model.vertices.map(vertice => {
                return {
                        x: Number((xCenter + (vertice.x - xCenter) * Math.cos(angle) + (vertice.y - yCenter) * Math.sin(angle)).toFixed(6)),
                        y: Number((yCenter - (vertice.x - xCenter) * Math.sin(angle) + (vertice.y - yCenter) * Math.cos(angle)).toFixed(6)),
                        z: vertice.z
                }
            })
            break
        }
    }

    rotatedModel.faces = model.faces

    return rotatedModel
}