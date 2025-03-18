// Read year from command line arguments
let year = parseInt(process.argv[2]);

// Function to check if year is a leap year
function isLeapYear(year) {
    if (year >= 1000 && year <= 9999) { // Check if it's a 4-digit number
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid Year (Not a 4-digit number)";
    }
}

let result = isLeapYear(year);
console.log(`Year ${year} is a Leap Year: ${result}`);
