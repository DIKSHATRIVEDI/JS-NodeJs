// a. 1 ft = 12 inches → 42 inches = ? ft
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);

// b. Rectangular Plot of 60 feet x 40 feet in meters (1 ft = 0.3048 m)
let lengthInFeet = 60;
let widthInFeet = 40;
let lengthInMeters = lengthInFeet * 0.3048;
let widthInMeters = widthInFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthInMeters.toFixed(2)} meters x ${widthInMeters.toFixed(2)} meters`);

// c. Area of 25 such plots in acres (1 sq ft = 0.0000229568 acres)
let plotAreaInSqFt = lengthInFeet * widthInFeet;
let totalAreaInSqFt = plotAreaInSqFt * 25;
let totalAreaInAcres = totalAreaInSqFt * 0.0000229568;
console.log(`Total area of 25 plots = ${totalAreaInAcres.toFixed(2)} acres`);
