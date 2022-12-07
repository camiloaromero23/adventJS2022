interface LayerType {
  [k: string]: string;
}

export const enum SIDE {
  SIDE = "side",
  COUNTERSIDE = "counterSide",
}

const createCube = (size: number) => {
  const types: LayerType = {
    sideA: "/\\",
    counterSideA: "\\/",
    sideB: "_\\".repeat(size),
    counterSideB: "_/".repeat(size),
  };
  const cubeSides = [];

  const buildLayer = (i: number, side: SIDE) => {
    const spaces = " ".repeat(size - i);
    const sideA = types[`${side}A`].repeat(i);
    const sideB = types[`${side}B`];
    return `${spaces}${sideA}${sideB}`;
  };

  for (let i = size; i > 0; i--) {
    cubeSides.unshift(buildLayer(i, SIDE.SIDE));
    cubeSides.push(buildLayer(i, SIDE.COUNTERSIDE));
  }
  return cubeSides.join("\n");
};

console.log(createCube(1));
console.log(createCube(2));
console.log(createCube(3));
