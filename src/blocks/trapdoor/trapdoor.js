import { modelToObj, rotateModel } from "../../utils/utils.js"
import acaciaModel from "./acaciaModel.js"
import bambooModel from './bambooModel.js'
import basicModel from "./basicModel.js"
import cherryModel from "./cherryModel.js"
import copperModel from "./copperModel.js"
import crimsonModel from "./crimsonModel.js"
import jungleModel from "./jungleModel.js"
import mangroveModel from "./mangroveModel.js"
import solidModel from "./solidModel.js"
import warpedModel from "./warpedModel.js"

const trapdoor = {
    model(x, y, z, vert, states, blockName) {
        const direction = { 0: 'west', 1: 'east', 2: 'north', 3: 'south' }[states.vanilla.direction.value]
        const isOpen = states.vanilla.open_bit.value
        const isUpsideDown = states.vanilla.upside_down_bit.value

        let trapdoorModel = {}

        switch (blockName) {
            case 'minecraft:acacia_trapdoor': {
                trapdoorModel = structuredClone(acaciaModel)
                break
            }
            
            case 'minecraft:trapdoor':
            case 'minecraft:iron_trapdoor': {
                trapdoorModel = structuredClone(basicModel)
                break
            }
            case 'minecraft:bamboo_trapdoor': {
                trapdoorModel = structuredClone(bambooModel)
                break
            }
            case 'minecraft:cherry_trapdoor': {
                trapdoorModel = structuredClone(cherryModel)
                break
            }
            case 'minecraft:crimson_trapdoor': {
                trapdoorModel = structuredClone(crimsonModel)
                break
            }
            case 'minecraft:jungle_trapdoor': {
                trapdoorModel = structuredClone(jungleModel)
                break
            }
            case 'minecraft:mangrove_trapdoor': {
                trapdoorModel = structuredClone(mangroveModel)
                break
            }
            case 'minecraft:birch_trapdoor':
            case 'minecraft:spruce_trapdoor':    
            case 'minecraft:dark_oak_trapdoor':
            case 'minecraft:pale_oak_trapdoor': {
                trapdoorModel = structuredClone(solidModel)
                break
            }
            case 'minecraft:warped_trapdoor': {
                trapdoorModel = structuredClone(warpedModel)
                break
            }
        }

        if (blockName.includes('copper')) trapdoorModel = structuredClone(copperModel)

        if (isUpsideDown) {
            for (let i = 0; i < trapdoorModel.vertices.length; i++) {
                trapdoorModel.vertices[i].y += 0.8125
            }
        }

        if (isOpen && !isUpsideDown) {
            trapdoorModel = rotateModel(trapdoorModel, 90, 'X', { xCenter: 0.5, yCenter: 0.09375, zCenter: 0.09375 })
        }
        if (isOpen && isUpsideDown) {
            trapdoorModel = rotateModel(trapdoorModel, -90, 'X', { xCenter: 0.5, yCenter: 0.90625, zCenter: 0.09375 })
        }

        switch (direction) {
            case 'east': {
                trapdoorModel = rotateModel(trapdoorModel, 90, 'Y', { xCenter: 0.5, yCenter: 0.5, zCenter: 0.5 })
                break
            }
            case 'south': {
                trapdoorModel = rotateModel(trapdoorModel, 180, 'Y', { xCenter: 0.5, yCenter: 0.5, zCenter: 0.5 })
                break
            }
            case 'west': {
                trapdoorModel = rotateModel(trapdoorModel, -90, 'Y', { xCenter: 0.5, yCenter: 0.5, zCenter: 0.5 })
                break
            }
        }

        return [modelToObj(trapdoorModel, x, y, z, vert) , vert += trapdoorModel.vertices.length]
    }
}

export default trapdoor