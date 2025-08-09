const fs = require("fs");
const nbt = require("prismarine-nbt");
const blockModels = require("./blockModels");

let blockArray
let structureSize

async function getDataFromStructureFile(file) {
  const buffer = fs.readFileSync(file);
  const { parsed } = await nbt.parse(buffer);
  const blockPalette = parsed.value.structure.value.palette.value.default.value.block_palette.value.value
  const dataArray = parsed.value.structure.value.block_indices.value.value.at(0).value
  const structureSize = parsed.value.size.value.value

  let x = 0
  let y = 0
  let z = 0

  for (let i = 0; i < dataArray.length; i++) {
    dataArray[i] = { "blockName": blockPalette[dataArray[i]].name.value, "blockStates": blockPalette[dataArray[i]].states.value, cords: {x, y, z} }
    z++

    if (z >= structureSize[2]) {
      z = 0
      y++
    };

    if (y >= structureSize[1]) {
      y = 0
      x++
    };
  };

  return [ dataArray, structureSize ]
};

function getMissingBlockStates(allBlocks) {
  let x = 0
  let y = 0
  let z = 0

  let filteredArray = []

  allBlocks.forEach(i => {
    if (i.blockName.includes('fence')) {
        filteredArray = [...filteredArray, i]
    }
  });

  console.log(filteredArray)
}


async function createObj(blocks, size) {
  let code = ''
  let { x, y, z } = 0
  let vert = 0
  
  for (let i = 0; i < blocks.length; i++) {
    ({x, y, z} = blocks[i].cords)

    switch (true) {
      case blocks[i].blockName.includes('air'): {
        code = code + blockModels.getModel(x, y, z, vert, 'air')
        vert = vert + 8
        break
      };
      case blocks[i].blockName.includes('slab'): {
        switch (true) {
          case JSON.stringify(blocks[i].blockStates).includes('top'): {
            code = code  + blockModels.getModel(x, y, z, vert, 'slab_top')
            vert = vert + 8
            break
          }
          case JSON.stringify(blocks[i].blockStates).includes('bottom'): {
            code = code  + blockModels.getModel(x, y, z, vert, 'slab_bottom')
            vert = vert + 8
            break
          }
        }
        break
      };
      case blocks[i].blockName.includes('wall'): {
        const isNorthShort = blocks[i].blockStates.wall_connection_type_north.value == 'short'
        const isEastShort = blocks[i].blockStates.wall_connection_type_east.value == 'short'
        const isSouthShort = blocks[i].blockStates.wall_connection_type_south.value == 'short'
        const isWestShort = blocks[i].blockStates.wall_connection_type_west.value == 'short'

        const isNorthTall = blocks[i].blockStates.wall_connection_type_north.value == 'tall'
        const isEastTall = blocks[i].blockStates.wall_connection_type_east.value == 'tall'
        const isSouthTall = blocks[i].blockStates.wall_connection_type_south.value == 'tall'
        const isWestTall = blocks[i].blockStates.wall_connection_type_west.value == 'tall'

        const hasPost = blocks[i].blockStates.wall_post_bit.value == 1

        if (!hasPost && isNorthShort && isSouthShort) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_no_post_north_south_short')
          vert = vert + 8
          break
        }
        if (!hasPost && isEastShort && isWestShort) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_no_post_east_west_short')
          vert = vert + 8
          break
        }
        if (!hasPost && isNorthTall && isSouthTall) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_no_post_north_south_tall')
          vert = vert + 8
          break
        }
        if (!hasPost && isEastTall && isWestTall) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_no_post_east_west_tall')
          vert = vert + 8
          break
        }

        code = code + blockModels.getModel(x, y, z, vert, 'wall_post')
        vert = vert + 8

        if (isNorthShort) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_north_short')
          vert = vert + 8
        }
        if (isEastShort) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_east_short')
          vert = vert + 8
        }
        if (isSouthShort) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_south_short')
          vert = vert + 8
        }
        if (isWestShort) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_west_short')
          vert = vert + 8
        }
        if (isNorthTall) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_north_tall')
          vert = vert + 8
        }
        if (isEastTall) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_east_tall')
          vert = vert + 8
        }
        if (isSouthTall) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_south_tall')
          vert = vert + 8
        }
        if (isWestTall) {
          code = code + blockModels.getModel(x, y, z, vert, 'wall_west_tall')
          vert = vert + 8
        }
        break
      };
      default: {
        code = code + blockModels.getModel(x, y, z, vert, 'fullBlock')
        vert = vert + 8
      };
    };
  };

  fs.writeFile('output.obj', code, (err) => {
			if (err) {
			console.error('Error writing data file:', err);
    			return;
  			}
		})
}

getDataFromStructureFile('fence.mcstructure').then(e => {
  blockArray = e[0]
  structureSize = e[1]
  getMissingBlockStates(blockArray)
  //console.log(blockArray[2].blockStates)
  createObj(blockArray, structureSize)
})