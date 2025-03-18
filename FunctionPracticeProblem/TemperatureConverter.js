const prompt = require('prompt-sync')(); // Import prompt for user input

// Function to convert °C to °F
function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

// Function to convert °F to °C
function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

console.log("Choose Conversion:");
console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");
let choice = parseInt(prompt("Enter your choice (1 or 2): "));

switch (choice) {
    case 1:
        let degC = parseFloat(prompt("Enter temperature in °C (0°C - 100°C): "));
        if (degC >= 0 && degC <= 100) {
            let degF = celsiusToFahrenheit(degC);
            console.log(`${degC}°C = ${degF.toFixed(2)}°F`);
        } else {
            console.log(" Invalid input! Enter a temperature between 0°C and 100°C.");
        }
        break;

    case 2:
        let degF = parseFloat(prompt("Enter temperature in °F (32°F - 212°F): "));
        if (degF >= 32 && degF <= 212) {
            let degC = fahrenheitToCelsius(degF);
            console.log(`${degF}°F = ${degC.toFixed(2)}°C`);
        } else {
            console.log("Invalid input! Enter a temperature between 32°F and 212°F.");
        }
        break;

    default:
        console.log("Invalid choice! Please select 1 or 2.");
}
