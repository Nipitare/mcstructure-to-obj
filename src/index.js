import { readFileSync, writeFile } from 'fs';
import { parse } from 'prismarine-nbt';
import blockData from './blocks/index.js';

let blockArray
let structureSize

async function getDataFromStructureFile(file) {
  const buffer = readFileSync(file);
  const { parsed } = await parse(buffer);
  const blockPalette = parsed.value.structure.value.palette.value.default.value.block_palette.value.value
  const dataArray = parsed.value.structure.value.block_indices.value.value.at(0).value
  const structureSize = parsed.value.size.value.value
  

  let x = 0
  let y = 0
  let z = 0

  for (let i = 0; i < blockPalette.length; i++) {
    const blockGroup = blockPalette[i].name.value.slice(10).split('_').pop()
       
    if (blockData[blockGroup] != undefined) {
      blockPalette[i].group = blockGroup
    }
    else blockPalette[i].group = 'fullBlock';

  };

  for (let i = 0; i < dataArray.length; i++) {
    dataArray[i] = { 'blockName': blockPalette[dataArray[i]].name.value, 'blockStates': { 'vanilla': blockPalette[dataArray[i]].states.value }, cords: {x, y, z}, 'group': blockPalette[dataArray[i]].group }
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
  // Another loop because data might go missing if code ran in prevoius loop
  for (let i = 0; i < dataArray.length; i++) {
    if (blockData[dataArray[i].group] != undefined && blockData[dataArray[i].group].states != undefined) {
      dataArray[i].blockStates.generated = { ...blockData[dataArray[i].group].states(dataArray[i], dataArray) }
    }
  }

  return [ dataArray, structureSize ]
};

async function createObj(blocks, size) {
  let code = ''
  let { x, y, z } = 0
  let vert = 0

  for (let i = 0; i < blocks.length; i++) {
    ({x, y, z} = blocks[i].cords)

  try {
    code += blockData[blocks[i].group].model(x, y, z, vert, blocks[i].blockStates)[0]
    vert = blockData[blocks[i].group].model(x, y, z, vert, blocks[i].blockStates)[1]
  } catch {
    code += blockData.fullBlock.model(x, y, z, vert, blocks[i].blockStates)[0]
    vert = blockData.fullBlock.model(x, y, z, vert, blocks[i].blockStates)[1]
  }
  };

  writeFile('output.obj', code, (err) => {
			if (err) {
			console.error('Error writing data file:', err);
    			return;
  			}
		})
}

getDataFromStructureFile('stairs.mcstructure').then(e => {
  blockArray = e[0]
  structureSize = e[1]
  createObj(blockArray, structureSize)
})