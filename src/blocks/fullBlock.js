import { createCuboidFromBoundingBox } from "../utils/utils.js"

const fullBlock = {
    model(x, y, z, vert) {
        return ['o Cube' + createCuboidFromBoundingBox(x, y, z, { x1: 0, x2: 1, y1: 0, y2: 1, z1: 0, z2: 1 }, vert), vert += 8]
    }
}

export default fullBlock