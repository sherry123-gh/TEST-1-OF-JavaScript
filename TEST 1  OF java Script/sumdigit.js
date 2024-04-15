function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;  // Add the last digit
        n = Math.floor(n / 10);  // Remove the last digit
    }
    return sum;
}

function addDigits(num) {
    // Handle negative numbers by taking absolute value
    num = Math.abs(num);

    // Keep summing digits until we get a single-digit number
    while (num >= 10) {
        num = sumDigits(num);
    }
    
    return num;
}

 // Output: 2 (since 3 + 8 = 11, then 1 + 1 = 2)

const checkout = addDigits(38);
console.log(checkout);  