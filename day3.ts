const distributeGifts = (packOfGifts: string[], reindeers: string[]) => {
  const giftsWeight = packOfGifts.reduce((prev, gift) => gift.length + prev, 0);
  const reindeersCapacity = reindeers.reduce(
    (prev, reindeer) => reindeer.length * 2 + prev,
    0
  );
  return Math.floor(reindeersCapacity / giftsWeight);
};

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "rudolph"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
console.log(distributeGifts(packOfGifts, reindeers)); // 2
