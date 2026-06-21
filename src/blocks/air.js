const air = {
    model(x, y, z, vert) {
        return [`o Cube
            v ${x+1} ${y+1} ${z}
            v ${x+1} ${y} ${z}
            v ${x+1} ${y+1} ${z+1}
            v ${x+1} ${y} ${z+1}
            v ${x} ${y+1} ${z}
            v ${x} ${y} ${z}
            v ${x} ${y+1} ${z+1}
            v ${x} ${y} ${z+1}\n`, vert += 8]
    }
}

export default air