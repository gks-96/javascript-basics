

const cutFruitPieces = fruit => fruit*4;

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} applie pieces and ${orangePieces} orange pieces `
    return juice;
}

const res = fruitProcessor(2,3);
console.log(res)