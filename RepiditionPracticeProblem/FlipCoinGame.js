const HEADS = 0;
const TAILS = 1;
let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.floor(Math.random() * 2); // 0 or 1

    if (flip === HEADS) {
        headsCount++;
        console.log("Flip: HEADS (Heads Count = " + headsCount + ", Tails Count = " + tailsCount + ")");
    } else {
        tailsCount++;
        console.log("Flip: TAILS (Heads Count = " + headsCount + ", Tails Count = " + tailsCount + ")");
    }
}

if (headsCount === 11) {
    console.log("\n🎉 Heads wins with 11 flips!");
} else {
    console.log("\n🎉 Tails wins with 11 flips!");
}
