const prompt = require('prompt-sync')();

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    let reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed);
}

// Function to check prime and palindrome prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindrome = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindrome}.`);
        if (isPrime(palindrome)) {
            console.log(`Palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`Palindrome ${palindrome} is NOT a prime number.`);
        }
    } else {
        console.log(`${num} is NOT a prime number.`);
    }
}

// Take input from user
let num = parseInt(prompt("Enter a number: "));
checkPrimeAndPalindrome(num);
