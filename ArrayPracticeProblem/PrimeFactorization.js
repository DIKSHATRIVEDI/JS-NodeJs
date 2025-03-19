function primeFactorization(n) {
    let factors = [];
    
    // Step 1: Check for number of 2s dividing n
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Step 2: Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // Step 3: If n is still greater than 2, it is a prime number
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}


let number = 84; 
let primeFactors = primeFactorization(number);

console.log(`Prime Factors of ${number}:`, primeFactors);
