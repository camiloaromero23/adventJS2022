const wrapping = (gifts: string[]) =>
  gifts.map((gift) => {
    const sideLength = gift.length + 2;
    const side = "*".repeat(sideLength);
    return `${side}\n*${gift}*\n${side}`;
  });

const gifts = ["book", "game", "socks"];
console.log(wrapping(gifts));
