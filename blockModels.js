function getModel(x, y, z, vert, block) {
switch (block) {
    case 'air': {
        return `o Cube
          v ${x+1} ${y+1} ${z}
          v ${x+1} ${y} ${z}
          v ${x+1} ${y+1} ${z+1}
          v ${x+1} ${y} ${z+1}
          v ${x} ${y+1} ${z}
          v ${x} ${y} ${z}
          v ${x} ${y+1} ${z+1}
          v ${x} ${y} ${z+1}\n`
    };
    case 'fullBlock': {
        return `o Cube
          v ${x+1} ${y+1} ${z}
          v ${x+1} ${y} ${z}
          v ${x+1} ${y+1} ${z+1}
          v ${x+1} ${y} ${z+1}
          v ${x} ${y+1} ${z}
          v ${x} ${y} ${z}
          v ${x} ${y+1} ${z+1}
          v ${x} ${y} ${z+1}

          f ${1+vert} ${5+vert} ${7+vert} ${3+vert}
          f ${4+vert} ${3+vert} ${7+vert} ${8+vert}
          f ${8+vert} ${7+vert} ${5+vert} ${6+vert}
          f ${6+vert} ${2+vert} ${4+vert} ${8+vert}
          f ${2+vert} ${1+vert} ${3+vert} ${4+vert}
          f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
    };
    case 'slab_bottom': {
        return `o Cube
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
              f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
    };
    case 'slab_top': {
        return `o Cube
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
              f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
    };
    case 'wall_post': {
        return `o Cube
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
    };
    case 'wall_north_short': {
        return `
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
    };
    case 'wall_east_short': {
        return `
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
    };
    case 'wall_south_short': {
        return `
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
    };
    case 'wall_west_short': {
        return `
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
    };
        case 'wall_north_tall': {
        return `
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
    };
    case 'wall_east_tall': {
        return `
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
    };
    case 'wall_south_tall': {
        return `
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
    };
    case 'wall_west_tall': {
        return `
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
    };
    case 'wall_no_post_north_south_short': {
        return `
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
              f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
    };
    case 'wall_no_post_east_west_short': {
        return `
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
              f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
    };
    case 'wall_no_post_north_south_tall': {
        return `
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
              f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
    };
    case 'wall_no_post_east_west_tall': {
        return `
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
              f ${6+vert} ${5+vert} ${1+vert} ${2+vert}\n`
    };
}
}
module.exports = { getModel }