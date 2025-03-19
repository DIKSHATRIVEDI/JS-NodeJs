function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
}

function rollDiceUntilLimit(limit) {
    let diceCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }; // Dictionary to store results
    let maxReached = false;
    let maxNumber = null;
    
    while (!maxReached) {
        let roll = rollDie();
        diceCount[roll]++;

        if (diceCount[roll] === limit) {
            maxReached = true;
            maxNumber = roll;
        }
    }

    return diceCount;
}

function findMaxAndMin(diceCount) {
    let maxRoll = null, minRoll = null;
    let maxTimes = -Infinity, minTimes = Infinity;

    for (let num in diceCount) {
        if (diceCount[num] > maxTimes) {
            maxTimes = diceCount[num];
            maxRoll = num;
        }
        if (diceCount[num] < minTimes) {
            minTimes = diceCount[num];
            minRoll = num;
        }
    }

    return { maxRoll, minRoll };
}

// Simulate the dice rolls
let diceResults = rollDiceUntilLimit(10);
console.log("Final Dice Roll Counts:", diceResults);

// Find the most and least frequent numbers
let { maxRoll, minRoll } = findMaxAndMin(diceResults);
console.log(`Number that appeared the most (reached 10 times first): ${maxRoll}`);
console.log(`Number that appeared the least: ${minRoll}`);
