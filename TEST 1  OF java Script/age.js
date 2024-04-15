// Prompt the user to enter their year of birth
let birthYearInput = prompt("Enter your year of birth:");

// Convert the user input to a number (assuming valid input)
let birthYear = parseInt(birthYearInput);

// Calculate the age based on the current year (assuming current year is 2024)
let currentYear = 2024;
let age = currentYear - birthYear;

// Determine the age category and print the result
if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age <= 36) {
    console.log("You are a youth.");
} else {
    console.log("You are an elder.");
}
