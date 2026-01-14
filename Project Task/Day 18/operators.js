let studentScore = 85;
let grade;

// The code checks conditions from TOP to BOTTOM.
// As soon as it finds a match, it stops checking the rest.

if (studentScore >= 90) {
    grade = "A";
} else if (studentScore >= 80) {
    grade = "B";
} else if (studentScore >= 70) {
    grade = "C";
} else if (studentScore >= 60) {
    grade = "D";
} else {
    // If none of the above were true, this runs.
    grade = "F";
}

console.log("Score:", studentScore);
console.log("Grade:", grade);

// Database values (The correct credentials)
const dbUser = "admin";
const dbPass = "secure123";
const isActive = true;

// User Input (What someone typed in)
let inputUser = "admin";
let inputPass = "secure123";

// The Validation Logic
// We use '&&' (AND) because ALL conditions must be true for success.
if (inputUser === dbUser && inputPass === dbPass && isActive) {
    console.log(" Login Successful! Welcome.");
} else {
    console.log("Login Failed: Invalid credentials or account locked.");
}

// 1. Inputs: The numbers and the math operation we want to perform
const num1 = 10;
const num2 = 0;
const operator = "/";

let result; // We will store the answer here

// 2. Logic: Decide what math to do based on the 'operator' variable
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    
    case "-":
        result = num1 - num2;
        break;
    
    case "*":
        result = num1 * num2;
        break;
    
    case "/":
        // Edge Case: Check for division by zero to prevent errors/infinity
        if (num2 === 0) {
            result = "Error: Cannot divide by zero.";
        } else {
            result = num1 / num2;
        }
        break;
        
    default:
        result = "Error: Invalid operator.";
}

// 3. Output
console.log(`Calculation: ${num1} ${operator} ${num2}`);
console.log("Result:", result);

// The user's role (Try changing this to 'guest', 'editor', or 'admin')
const userRole = "editor";
let permissions;

switch (userRole) {
    case "admin":
        permissions = "Full Access: Create, Read, Update, Delete";
        break;
        
    case "editor":
        permissions = "Edit Access: Create, Read, Update";
        break;
        
    case "viewer":
        permissions = "Read-Only Access: Read";
        break;
        
    case "guest":
        permissions = "Limited Access: Preview content only";
        break;
        
    default:
        permissions = "No Access: Role not recognized";
}

console.log(`User Role: ${userRole}`);
console.log(`Permissions: ${permissions}`);

let purchaseAmount = 120; // Try changing this to 40 or 80
let discount = 0;

// Determine the discount percentage based on tiers
if (purchaseAmount >= 100) {
    discount = 0.20; // 20% discount for orders $100+
} else if (purchaseAmount >= 50) {
    discount = 0.10; // 10% discount for orders $50+
} else {
    discount = 0.0;  // No discount for small orders
}

// Calculate the final price
// Formula: Original Price - (Original Price * Discount %)
let discountAmount = purchaseAmount * discount;
let finalPrice = purchaseAmount - discountAmount;

console.log(`Subtotal: $${purchaseAmount}`);
console.log(`Discount Applied: ${discount * 100}% ($${discountAmount})`);
console.log(`Total Due: $${finalPrice}`);