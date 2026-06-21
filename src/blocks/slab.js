import { createCubiod } from "../utils/utils.js"

const slab = {
    model(x, y, z, vert, states) {
        if (JSON.stringify(states.vanilla).includes('top')) {
            return ['o Cube' + createCubiod(x, y, z, 0, 1, 0.5, 1, 0, 1, vert), vert += 8]
        } else {
            return ['o Cube' + createCubiod(x, y, z, 0, 1, 0, 0.5, 0, 1, vert), vert += 8]
        }
    }
}

export default slab