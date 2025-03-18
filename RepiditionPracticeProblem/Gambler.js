let stake = 100; // Starting money
const goal = 200; // Winning goal
let bets = 0; // Number of bets made
let wins = 0; // Number of times won

while (stake > 0 && stake < goal) {
    bets++; // Increment bet count
    let betOutcome = Math.random() < 0.5; // 50% chance to win (true) or lose (false)

    if (betOutcome) {
        stake++; // Win: Gain ₹1
        wins++;  // Increment win count
    } else {
        stake--; // Lose: Lose ₹1
    }
}

console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);
if (stake === goal) {
    console.log("🎉 Gambler won and reached ₹200!");
} else {
    console.log("💸 Gambler went broke!");
}
