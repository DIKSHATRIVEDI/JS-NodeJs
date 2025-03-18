// Read number from command line arguments
let num = parseInt(process.argv[2]);

// Function to convert number to weekday
function numberToWeekday(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input (Please enter a number between 1 and 7)";
    }
}

let result = numberToWeekday(num);
console.log(`Day ${num}: ${result}`);
