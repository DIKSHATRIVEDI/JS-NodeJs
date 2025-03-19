function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    // Sorting the array helps to avoid duplicate triplets easily
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Avoid duplicate elements for the first number
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                
                // Skip duplicate values
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase left pointer to get a larger sum
            } else {
                right--; // Decrease right pointer to get a smaller sum
            }
        }
    }

    return triplets;
}

// Example input
let arr = [0, -1, 2, -3, 1, -2, 3, 4, -4];
let result = findTriplets(arr);

console.log("Triplets that sum to zero:", result);
