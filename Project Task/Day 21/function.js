// --- 1. The Helper Functions (The Tools) ---

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
    // Safety check: prevent crashing by checking for zero
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// --- 2. The Main Manager Function ---

function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2); // Calls the add function
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
            return "Error: Invalid Operator";
    }

    return result;
}

// --- 3. Testing it Out ---

console.log("Addition:", calculate(10, 5, "+"));      // Output: 15
console.log("Multiplication:", calculate(4, 3, "*")); // Output: 12
console.log("Division by Zero:", calculate(10, 0, "/")); // Output: Error


function checkOddEven(number) {
    // The Modulo Operator (%) calculates the remainder.
    // If a number divided by 2 has a remainder of 0, it is Even.
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

// 1. Helper Functions for specific formulas
function getRectangleArea(width, height) {
    return width * height;
}

function getCircleArea(radius) {
    // Math.PI is a built-in constant for 3.14159...
    // radius ** 2 means "radius squared"
    return Math.PI * (radius ** 2);
}

// 2. Main Function to decide which formula to use
function calculateArea(shape, dim1, dim2) {
    let area;

    switch (shape) {
        case "rectangle":
            // dim1 is width, dim2 is height
            area = getRectangleArea(dim1, dim2);
            break;
            
        case "circle":
            // dim1 is radius (dim2 is ignored for circles)
            area = getCircleArea(dim1);
            break;
            
        default:
            return "Error: Unknown shape";
    }

    // Return the result rounded to 2 decimal places
    return area.toFixed(2);
}

// 3. Testing it out
console.log("Rectangle Area:", calculateArea("rectangle", 10, 5)); // Output: 50.00
console.log("Circle Area:", calculateArea("circle", 7));           // Output: 153.94

// 1. Define the Function
// We set a default time of 'Day' just in case the user doesn't provide one.
function greetUser(name, timeOfDay = "Day") {
    
    let greeting;

    // 2. Determine the Greeting based on Time
    // We convert input to lowercase to make it case-insensitive
    const time = timeOfDay.toLowerCase();

    if (time === "morning") {
        greeting = `Good Morning, ${name}! `;
    } else if (time === "afternoon") {
        greeting = `Good Afternoon, ${name}! `;
    } else if (time === "evening") {
        greeting = `Good Evening, ${name}! `;
    } else {
        // Fallback for unknown times
        greeting = `Hello, ${name}! `;
    }

    return greeting;
}

// 3. Test the App
console.log(greetUser("Alice", "Morning"));   // Output: Good Morning, Alice! 
console.log(greetUser("Bob", "Evening"));     // Output: Good Evening, Bob! 
console.log(greetUser("Charlie"));            // Output: Hello, Charlie! (Uses default)

// 1. Function to Display Options
function showMenu() {
    console.log("--- STARBUCKS MENU ---");
    console.log("1. Espresso ($3)");
    console.log("2. Latte ($5)");
    console.log("3. Cappuccino ($6)");
}

// 2. Function to Get the Price
// This function takes a choice (number) and returns the cost (number)
function getPrice(choice) {
    switch (choice) {
        case 1:
            return 3;
        case 2:
            return 5;
        case 3:
            return 6;
        default:
            return 0; // Return 0 if choice is invalid
    }
}

// 3. Main Function to Run the App
function placeOrder(choice) {
    // Step A: Show the menu (Optional, just for context)
    showMenu();

    // Step B: Get the price using our helper function
    let price = getPrice(choice);

    // Step C: Check the result
    if (price > 0) {
        console.log(` Success! Please pay $${price}.`);
    } else {
        console.log(" Error: That item is not on the menu.");
    }
}

// --- Run It ---
placeOrder(2); // We try to order item #2 (Latte)