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
            return [`o Cube
                v ${x+.6875} ${y+.8125} ${z}
                v ${x+.6875} ${y} ${z}
                v ${x+.6875} ${y+.8125} ${z+1}
                v ${x+.6875} ${y} ${z+1}
                v ${x+.3125} ${y+.8125} ${z}
                v ${x+.3125} ${y} ${z}
                v ${x+.3125} ${y+.8125} ${z+1}
                v ${x+.3125} ${y} ${z+1}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`, vert += 8]
        }
        if (!hasPost && isEastShort && isWestShort) {
            return [`o Cube
                v ${x+1} ${y+.8125} ${z+.3125}
                v ${x+1} ${y} ${z+.3125}
                v ${x+1} ${y+.8125} ${z+.6875}
                v ${x+1} ${y} ${z+.6875}
                v ${x} ${y+.8125} ${z+.3125}
                v ${x} ${y} ${z+.3125}
                v ${x} ${y+.8125} ${z+.6875}
                v ${x} ${y} ${z+.6875}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`, vert += 8]
        }
        if (!hasPost && isNorthTall && isSouthTall) {
            return [`o Cube
                v ${x+.6875} ${y+1} ${z}
                v ${x+.6875} ${y} ${z}
                v ${x+.6875} ${y+1} ${z+1}
                v ${x+.6875} ${y} ${z+1}
                v ${x+.3125} ${y+1} ${z}
                v ${x+.3125} ${y} ${z}
                v ${x+.3125} ${y+1} ${z+1}
                v ${x+.3125} ${y} ${z+1}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`, vert += 8]
        }
        if (!hasPost && isEastTall && isWestTall) {
            return [`o Cube
                v ${x+1} ${y+1} ${z+.3125}
                v ${x+1} ${y} ${z+.3125}
                v ${x+1} ${y+1} ${z+.6875}
                v ${x+1} ${y} ${z+.6875}
                v ${x} ${y+1} ${z+.3125}
                v ${x} ${y} ${z+.3125}
                v ${x} ${y+1} ${z+.6875}
                v ${x} ${y} ${z+.6875}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`, vert += 8]
        }

        returnCode = returnCode + `o Cube
            v ${x+.75} ${y+1} ${z+.25}
            v ${x+.75} ${y} ${z+.25}
            v ${x+.75} ${y+1} ${z+.75}
            v ${x+.75} ${y} ${z+.75}
            v ${x+.25} ${y+1} ${z+.25}
            v ${x+.25} ${y} ${z+.25}
            v ${x+.25} ${y+1} ${z+.75}
            v ${x+.25} ${y} ${z+.75}

            f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
            f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
            f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
            f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
            f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
            f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
        vert += 8

        if (isNorthShort) {
            returnCode += `
                v ${x+.6875} ${y+.8125} ${z}
                v ${x+.6875} ${y} ${z}
                v ${x+.6875} ${y+.8125} ${z+.25}
                v ${x+.6875} ${y} ${z+.25}
                v ${x+.3125} ${y+.8125} ${z}
                v ${x+.3125} ${y} ${z}
                v ${x+.3125} ${y+.8125} ${z+.25}
                v ${x+.3125} ${y} ${z+.25}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }
        if (isEastShort) {
            returnCode += `
                v ${x+1} ${y+.8125} ${z+.3125}
                v ${x+1} ${y} ${z+.3125}
                v ${x+1} ${y+.8125} ${z+.6875}
                v ${x+1} ${y} ${z+.6875}
                v ${x+.75} ${y+.8125} ${z+.3125}
                v ${x+.75} ${y} ${z+.3125}
                v ${x+.75} ${y+.8125} ${z+.6875}
                v ${x+.75} ${y} ${z+.6875}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }
        if (isSouthShort) {
            returnCode += `
                v ${x+.6875} ${y+.8125} ${z+.75}
                v ${x+.6875} ${y} ${z+.75}
                v ${x+.6875} ${y+.8125} ${z+1}
                v ${x+.6875} ${y} ${z+1}
                v ${x+.3125} ${y+.8125} ${z+.75}
                v ${x+.3125} ${y} ${z+.75}
                v ${x+.3125} ${y+.8125} ${z+1}
                v ${x+.3125} ${y} ${z+1}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }
        if (isWestShort) {
            returnCode += `
                v ${x+.25} ${y+.8125} ${z+.3125}
                v ${x+.25} ${y} ${z+.3125}
                v ${x+.25} ${y+.8125} ${z+.6875}
                v ${x+.25} ${y} ${z+.6875}
                v ${x} ${y+.8125} ${z+.3125}
                v ${x} ${y} ${z+.3125}
                v ${x} ${y+.8125} ${z+.6875}
                v ${x} ${y} ${z+.6875}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }
        if (isNorthTall) {
            returnCode += `
                v ${x+.6875} ${y+1} ${z}
                v ${x+.6875} ${y} ${z}
                v ${x+.6875} ${y+1} ${z+.25}
                v ${x+.6875} ${y} ${z+.25}
                v ${x+.3125} ${y+1} ${z}
                v ${x+.3125} ${y} ${z}
                v ${x+.3125} ${y+1} ${z+.25}
                v ${x+.3125} ${y} ${z+.25}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }
        if (isEastTall) {
            returnCode += `
                v ${x+1} ${y+1} ${z+.3125}
                v ${x+1} ${y} ${z+.3125}
                v ${x+1} ${y+1} ${z+.6875}
                v ${x+1} ${y} ${z+.6875}
                v ${x+.75} ${y+1} ${z+.3125}
                v ${x+.75} ${y} ${z+.3125}
                v ${x+.75} ${y+1} ${z+.6875}
                v ${x+.75} ${y} ${z+.6875}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }
        if (isSouthTall) {
            returnCode += `
                v ${x+.6875} ${y+1} ${z+.75}
                v ${x+.6875} ${y} ${z+.75}
                v ${x+.6875} ${y+1} ${z+1}
                v ${x+.6875} ${y} ${z+1}
                v ${x+.3125} ${y+1} ${z+.75}
                v ${x+.3125} ${y} ${z+.75}
                v ${x+.3125} ${y+1} ${z+1}
                v ${x+.3125} ${y} ${z+1}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }
        if (isWestTall) {
            returnCode += `
                v ${x+.25} ${y+1} ${z+.3125}
                v ${x+.25} ${y} ${z+.3125}
                v ${x+.25} ${y+1} ${z+.6875}
                v ${x+.25} ${y} ${z+.6875}
                v ${x} ${y+1} ${z+.3125}
                v ${x} ${y} ${z+.3125}
                v ${x} ${y+1} ${z+.6875}
                v ${x} ${y} ${z+.6875}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
            vert += 8
        }

        return [returnCode, vert]
    }
}

export default wall