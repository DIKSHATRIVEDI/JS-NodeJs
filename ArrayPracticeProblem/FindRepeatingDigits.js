function findRepeatedDigitsInRange(start, end) {
    let repeatedDigitsArray = [];

    for (let i = start; i <= end; i++) {
        let numStr = i.toString();
        if (numStr.length === 2 && numStr[0] === numStr[1]) {
            repeatedDigitsArray.push(i);
        }
    }

    return repeatedDigitsArray;
}

// Find numbers with repeated digits in the range 0-100
let repeatedNumbers = findRepeatedDigitsInRange(0, 100);
console.log("Numbers with repeated digits:", repeatedNumbers);
