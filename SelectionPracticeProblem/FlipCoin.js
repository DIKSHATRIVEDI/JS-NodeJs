// Function to simulate coin flip
function flipCoin() {
    let result = Math.floor(Math.random() * 2); // 0 or 1
    return result === 0 ? "Heads" : "Tails";
}

// Flip the coin
let outcome = flipCoin();
console.log(`Coin Flip Result: ${outcome}`);
