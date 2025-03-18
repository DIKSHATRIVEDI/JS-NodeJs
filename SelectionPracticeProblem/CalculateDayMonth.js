// Read day and month from command line arguments
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

// Function to check if date is between March 20 and June 20
function isDateInRange(day, month) {
    if ((month === 3 && day >= 20) || // March 20 onwards
        (month === 4 && day >= 1 && day <= 30) || // Whole April
        (month === 5 && day >= 1 && day <= 31) || // Whole May
        (month === 6 && day <= 20)) { // Till June 20
        return true;
    }
    return false;
}

let result = isDateInRange(day, month);
console.log(`Date ${day}/${month} is in range: ${result}`);
