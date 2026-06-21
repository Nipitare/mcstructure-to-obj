import { createCubiod } from "../utils/utils.js"

const fullBlock = {
    model(x, y, z, vert) {
        return ['o Cube' + createCubiod(x, y, z, 0, 1, 0, 1, 0, 1, vert), vert += 8]
    }
}

export default fullBlock