function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Step a & b: Generate 10 random numbers and store in an array
let randomNumbers = Array.from({ length: 10 }, getRandomThreeDigitNumber);
console.log("Generated Numbers:", randomNumbers);

// Step c: Find 2nd largest and 2nd smallest without sorting
let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
