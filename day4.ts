interface Box {
  l: number;
  w: number;
  h: number;
}

const fitsInOneBox = (boxes: Box[]) => {
  boxes.sort((a, b) => {
    const sizeA = a.l * a.h * a.w;
    const sizeB = b.l * b.h * b.w;

    return sizeB - sizeA;
  });

  return !boxes.some((box, i, boxes) => {
    if (i === 0) return;
    const prevBox = boxes[i - 1];
    if (box.h >= prevBox.h) return true;
    if (box.w >= prevBox.w) return true;
    if (box.l >= prevBox.l) return true;
  });
};

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ])
);

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ])
);
