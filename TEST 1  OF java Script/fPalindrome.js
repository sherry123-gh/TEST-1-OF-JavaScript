function firstPalindrome(words) {
    // check if a string is palindrome
    function isPalindrome(words) {
        return words === words.split('').reverse().join('');
    }
    for (let word of words) {
        // Check if the current word is a palindrome
        if (isPalindrome(word)) {
            return word; // Return the first palindrome found
        }
    }

    // If no palindrome is found, return an empty string
    return "";
}

// Output: "level" (because "level" is the first palindrome in the array)

const wordsArray = ["hello", "level", "world", "radar", "goodbye"];
const check = firstPalindrome(wordsArray);
console.log(check); 