// 1. Define the Function
// 'baseNumber' is the number we are multiplying (e.g., 5)
// 'limit' is how far we count (defaulting to 10 if you don't say otherwise)
function generateTable(baseNumber, limit = 10) {
    
    console.log(`--- The ${baseNumber} Times Table ---`);
    
    // 2. The Loop
    for (let i = 1; i <= limit; i++) {
        const result = baseNumber * i;
        console.log(`${baseNumber} x ${i} = ${result}`);
    }
    
    console.log("----------------------------");
}

// 3. Call the Function
generateTable(5);      // Prints the 5 table (up to 10)
generateTable(12, 5);  // Prints the 12 table (only up to 5)

// 1. Define the Helper Functions (The Tools)
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// 2. Define the Main Calculator Function (The Manager)
function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            return "Invalid Operator";
    }

    return result;
}

// 3. Test It Out
console.log(calculate(10, 5, "+"));  // Output: 15
console.log(calculate(10, 0, "/"));  // Output: Error: Cannot divide by zero
console.log(calculate(7, 7, "*"));   // Output: 49

function checkOddEven(number) {
    // The Modulo Operator (%) finds the remainder.
    // If number divided by 2 has a remainder of 0, it is Even.
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Testing the function
console.log(checkOddEven(10));  // Output: Even
console.log(checkOddEven(7));   // Output: Odd
console.log(checkOddEven(0));   // Output: Even

// Logic: (Condition) ? (Value if True) : (Value if False)
const checkOddEvenShort = num => (num % 2 === 0 ? "Even" : "Odd");

console.log(checkOddEvenShort(45)); // Output: Odd

// 1. Function to Display the Menu
function showMenu() {
    console.log("--- DINER MENU ---");
    console.log("1. Burger ($10)");
    console.log("2. Pizza ($12)");
    console.log("3. Salad ($8)");
    console.log("------------------");
}

// 2. Function to Get Price & Item Name
// Returns an object: { name: "Burger", price: 10 }
function getItemDetails(choice) {
    switch (choice) {
        case 1:
            return { name: "Burger", price: 10 };
        case 2:
            return { name: "Pizza", price: 12 };
        case 3:
            return { name: "Salad", price: 8 };
        default:
            return null; // Return null if the choice is invalid
    }
}

// 3. Main Function to Place an Order
function placeOrder(choice) {
    // Step A: Get the details
    const item = getItemDetails(choice);

    // Step B: Check if valid
    if (item === null) {
        console.log(" Error: Invalid selection.");
        return; // Stop the function here
    }

    // Step C: Confirm Order
    console.log(` You ordered a ${item.name}.`);
    console.log(` Total Due: $${item.price}`);
}

// --- RUN THE PROGRAM ---
showMenu();        // Show the options
placeOrder(2);     // Try ordering a Pizza