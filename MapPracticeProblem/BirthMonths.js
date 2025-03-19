function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1; // Generates a month between 1 and 12
}

function generateBirthMonths(numIndividuals) {
    let birthMonthMap = new Map();

    // Initialize the Map with empty arrays for each month
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    // Assign a birth month to 50 individuals
    for (let i = 1; i <= numIndividuals; i++) {
        let month = getRandomMonth();
        birthMonthMap.get(month).push(`Person${i}`); // Store individuals under their birth month
    }

    return birthMonthMap;
}

// Generate birth months for 50 individuals
let birthMonths = generateBirthMonths(50);

// Print grouped birth months
console.log("Individuals grouped by birth month:");
for (let [month, individuals] of birthMonths.entries()) {
    if (individuals.length > 0) {
        console.log(`Month ${month}:`, individuals);
    }
}
