const fence = {
    model(x, y, z, vert, states) {
        const isEast = states.generated.connection_east
        const isNorth = states.generated.connection_north
        const isWest = states.generated.connection_west
        const isSouth = states.generated.connection_south

        let returnCode = ''

        returnCode = returnCode + `o Cube
            v ${x+.625} ${y+1} ${z+.375}
            v ${x+.625} ${y} ${z+.375}
            v ${x+.625} ${y+1} ${z+.625}
            v ${x+.625} ${y} ${z+.625}
            v ${x+.375} ${y+1} ${z+.375}
            v ${x+.375} ${y} ${z+.375}
            v ${x+.375} ${y+1} ${z+.625}
            v ${x+.375} ${y} ${z+.625}

            f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
            f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
            f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
            f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
            f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
            f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
        vert += 8

        if (isNorth) {
            returnCode += `
                v ${x+.625} ${y+.9375} ${z}
                v ${x+.625} ${y+.75} ${z}
                v ${x+.625} ${y+.9375} ${z+.375}
                v ${x+.625} ${y+.75} ${z+.375}
                v ${x+.375} ${y+.9375} ${z}
                v ${x+.375} ${y+.75} ${z}
                v ${x+.375} ${y+.9375} ${z+.375}
                v ${x+.375} ${y+.75} ${z+.375}
                v ${x+.625} ${y+.5625} ${z}
                v ${x+.625} ${y+.375} ${z}
                v ${x+.625} ${y+.5625} ${z+.375}
                v ${x+.625} ${y+.375} ${z+.375}
                v ${x+.375} ${y+.5625} ${z}
                v ${x+.375} ${y+.375} ${z}
                v ${x+.375} ${y+.5625} ${z+.375}
                v ${x+.375} ${y+.375} ${z+.375}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}
                f ${9+vert} ${13+vert} ${15+vert} ${11+vert}
                f ${12+vert} ${11+vert} ${15+vert} ${16+vert}
                f ${16+vert} ${15+vert} ${13+vert} ${14+vert}
                f ${14+vert} ${10+vert} ${12+vert} ${16+vert}
                f ${10+vert} ${9+vert} ${11+vert} ${12+vert}
                f ${14+vert} ${13+vert} ${9+vert} ${10+vert}\n`
            vert += 16
        }
        if (isEast) {
            returnCode += `
                v ${x+1} ${y+.9375} ${z+.375}
                v ${x+1} ${y+.75} ${z+.375}
                v ${x+1} ${y+.9375} ${z+.625}
                v ${x+1} ${y+.75} ${z+.625}
                v ${x+.625} ${y+.9375} ${z+.375}
                v ${x+.625} ${y+.75} ${z+.375}
                v ${x+.625} ${y+.9375} ${z+.625}
                v ${x+.625} ${y+.75} ${z+.625}
                v ${x+1} ${y+.5625} ${z+.375}
                v ${x+1} ${y+.375} ${z+.375}
                v ${x+1} ${y+.5625} ${z+.625}
                v ${x+1} ${y+.375} ${z+.625}
                v ${x+.625} ${y+.5625} ${z+.375}
                v ${x+.625} ${y+.375} ${z+.375}
                v ${x+.625} ${y+.5625} ${z+.625}
                v ${x+.625} ${y+.375} ${z+.625}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}
                f ${9+vert} ${13+vert} ${15+vert} ${11+vert}
                f ${12+vert} ${11+vert} ${15+vert} ${16+vert}
                f ${16+vert} ${15+vert} ${13+vert} ${14+vert}
                f ${14+vert} ${10+vert} ${12+vert} ${16+vert}
                f ${10+vert} ${9+vert} ${11+vert} ${12+vert}
                f ${14+vert} ${13+vert} ${9+vert} ${10+vert}\n`
            vert += 16
        }
        if (isSouth) {
            returnCode += `
                v ${x+.625} ${y+.9375} ${z+.625}
                v ${x+.625} ${y+.75} ${z+.625}
                v ${x+.625} ${y+.9375} ${z+1}
                v ${x+.625} ${y+.75} ${z+1}
                v ${x+.375} ${y+.9375} ${z+.625}
                v ${x+.375} ${y+.75} ${z+.625}
                v ${x+.375} ${y+.9375} ${z+1}
                v ${x+.375} ${y+.75} ${z+1}
                v ${x+.625} ${y+.5625} ${z+.625}
                v ${x+.625} ${y+.375} ${z+.625}
                v ${x+.625} ${y+.5625} ${z+1}
                v ${x+.625} ${y+.375} ${z+1}
                v ${x+.375} ${y+.5625} ${z+.625}
                v ${x+.375} ${y+.375} ${z+.625}
                v ${x+.375} ${y+.5625} ${z+1}
                v ${x+.375} ${y+.375} ${z+1}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}
                f ${9+vert} ${13+vert} ${15+vert} ${11+vert}
                f ${12+vert} ${11+vert} ${15+vert} ${16+vert}
                f ${16+vert} ${15+vert} ${13+vert} ${14+vert}
                f ${14+vert} ${10+vert} ${12+vert} ${16+vert}
                f ${10+vert} ${9+vert} ${11+vert} ${12+vert}
                f ${14+vert} ${13+vert} ${9+vert} ${10+vert}\n`
            vert += 16
        }
        if (isWest) {
            returnCode += `
                v ${x+.375} ${y+.9375} ${z+.375}
                v ${x+.375} ${y+.75} ${z+.375}
                v ${x+.375} ${y+.9375} ${z+.625}
                v ${x+.375} ${y+.75} ${z+.625}
                v ${x} ${y+.9375} ${z+.375}
                v ${x} ${y+.75} ${z+.375}
                v ${x} ${y+.9375} ${z+.625}
                v ${x} ${y+.75} ${z+.625}
                v ${x+.375} ${y+.5625} ${z+.375}
                v ${x+.375} ${y+.375} ${z+.375}
                v ${x+.375} ${y+.5625} ${z+.625}
                v ${x+.375} ${y+.375} ${z+.625}
                v ${x} ${y+.5625} ${z+.375}
                v ${x} ${y+.375} ${z+.375}
                v ${x} ${y+.5625} ${z+.625}
                v ${x} ${y+.375} ${z+.625}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}
                f ${9+vert} ${13+vert} ${15+vert} ${11+vert}
                f ${12+vert} ${11+vert} ${15+vert} ${16+vert}
                f ${16+vert} ${15+vert} ${13+vert} ${14+vert}
                f ${14+vert} ${10+vert} ${12+vert} ${16+vert}
                f ${10+vert} ${9+vert} ${11+vert} ${12+vert}
                f ${14+vert} ${13+vert} ${9+vert} ${10+vert}\n`
            vert += 16
        }

        return [returnCode, vert]
    },
    states(currentBlock, allBlocks) {
        let states = { 'connection_north': false, 'connection_east': false, 'connection_south': false, 'connection_west': false }
        const {x, y, z} = currentBlock.cords

        allBlocks.forEach(block => {
            if (JSON.stringify({x, y, z: z - 1}) == JSON.stringify(block.cords) && block.group != 'air') {
                states.connection_north = true
            }
            if (JSON.stringify({x: x + 1, y, z}) == JSON.stringify(block.cords) && block.group != 'air') {
                states.connection_east = true
            }
            if (JSON.stringify({x, y, z: z + 1}) == JSON.stringify(block.cords) && block.group != 'air') {
                states.connection_south = true
            }
            if (JSON.stringify({x: x - 1, y, z}) == JSON.stringify(block.cords) && block.group != 'air') {
                states.connection_west = true
            }
        })

        return states
    }
}

module.exports = { fence }