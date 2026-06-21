const slab = {
    model(x, y, z, vert, states) {
        if (JSON.stringify(states.vanilla).includes('top')) {
            return [`o Cube
                v ${x+1} ${y+1} ${z}
                v ${x+1} ${y+.5} ${z}
                v ${x+1} ${y+1} ${z+1}
                v ${x+1} ${y+.5} ${z+1}
                v ${x} ${y+1} ${z}
                v ${x} ${y+.5} ${z}
                v ${x} ${y+1} ${z+1}
                v ${x} ${y+.5} ${z+1}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`, vert += 8]
        } else return [`o Cube
                v ${x+1} ${y+.5} ${z}
                v ${x+1} ${y} ${z}
                v ${x+1} ${y+.5} ${z+1}
                v ${x+1} ${y} ${z+1}
                v ${x} ${y+.5} ${z}
                v ${x} ${y} ${z}
                v ${x} ${y+.5} ${z+1}
                v ${x} ${y} ${z+1}

                f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
                f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
                f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
                f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
                f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
                f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`, vert += 8]
    }
}

module.exports = { slab }