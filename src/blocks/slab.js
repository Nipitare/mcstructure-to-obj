import { createCuboid } from "../utils/utils.js"

const slab = {
    model(x, y, z, vert, states) {
        if (JSON.stringify(states.vanilla).includes('top')) {
            return ['o Cube' + createCuboid(x, y, z, { x1: 0, x2: 1, y1: 0.5, y2: 1, z1: 0, z2: 1 }, vert), vert += 8]
        } else {
            return ['o Cube' + createCuboid(x, y, z, { x1: 0, x2: 1, y1: 0, y2: 0.5, z1: 0, z2: 1 }, vert), vert += 8]
        }
    }
}

export default slab