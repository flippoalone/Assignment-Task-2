const num1 = 20;
const num2 = 5;
const operator = "/";

let result;

// 1. Check for Addition
if (operator === "+") {
    result = num1 + num2;

// 2. Check for Subtraction
} else if (operator === "-") {
    result = num1 - num2;

// 3. Check for Multiplication
} else if (operator === "*") {
    result = num1 * num2;

// 4. Check for Division
} else if (operator === "/") {
    // Nested If: Prevent crashing by checking for zero
    if (num2 === 0) {
        result = "Error: Cannot divide by zero";
    } else {
        result = num1 / num2;
    }

// 5. Check for Unknown Operators
} else {
    result = "Error: Invalid Operator";
}

console.log(`Equation: ${num1} ${operator} ${num2}`);
console.log("Result:", result);

const number = 7; // Change this to generate a different table
console.log(`--- Multiplication Table for ${number} ---`);

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}

// 1. The Correct Credentials (Stored in Database)
const storedUser = "superUser";
const storedPass = "password123";

// 2. The User's Input (What they typed)
let inputUser = "superUser";
let inputPass = "wrongPassword"; // Try changing this to 'password123'

// 3. The Validation Logic
// We use '&&' (AND) because both must be true.
if (inputUser === storedUser && inputPass === storedPass) {
    console.log(" Access Granted! Welcome back.");
} else {
    // Security Best Practice: Don't tell them WHICH one was wrong.
    console.log("Access Denied: Invalid username or password.");
}

// Converts input to 'superuser' before checking
if (inputUser.toLowerCase() === storedUser.toLowerCase());

let score = 75; // Try changing this to 95, 45, or 105
let grade;

// The checks happen from TOP to BOTTOM.
// Once a condition is met, the rest are skipped.
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);

if (score > 100 || score < 0) {
    console.log("Error: Invalid Score");
} else if (score >= 90) {
   // ... rest of the logic
}


// 1. Display the Menu
console.log("--- MENU ---");
console.log("1. Burger ($10)");
console.log("2. Pizza ($12)");
console.log("3. Salad ($8)");

// 2. The User's Choice
let choice = 2; 
let item;
let price;

// 3. Process the Selection
switch (choice) {
    case 1:
        item = "Burger";
        price = 10;
        break;
        
    case 2:
        item = "Pizza";
        price = 12;
        break;
        
    case 3:
        item = "Salad";
        price = 8;
        break;
        
    default:
        item = "Invalid Selection";
        price = 0;
}

// 4. Output the Result
if (price > 0) {
    console.log(`You ordered a ${item}. That will be $${price}.`);
} else {
    console.log("Error: Please select a valid number from the menu.");
}