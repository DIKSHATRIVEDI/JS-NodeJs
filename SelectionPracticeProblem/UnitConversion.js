const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function for unit conversion
function unitConversion(option, value) {
    switch (option) {
        case 1:
            console.log(`${value} Feet = ${value * 12} Inches`);
            break;
        case 2:
            console.log(`${value} Feet = ${value * 0.3048} Meters`);
            break;
        case 3:
            console.log(`${value} Inches = ${value / 12} Feet`);
            break;
        case 4:
            console.log(`${value} Meters = ${value * 3.28084} Feet`);
            break;
        default:
            console.log("Invalid Option!");
    }
}

// Take user input
rl.question('Choose conversion:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\nEnter option: ', (option) => {
    option = parseInt(option);

    rl.question('Enter value to convert: ', (value) => {
        value = parseFloat(value);
        unitConversion(option, value);
        rl.close();
    });
});
