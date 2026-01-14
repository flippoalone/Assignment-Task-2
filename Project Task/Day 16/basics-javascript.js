const userProfile = {
    name: "Alex",       
    age: 25,            
    city: "New York"    
};

// 1. Initialize the score at zero
let score = 0;
console.log("Game Start:", score);

// 2. Player scores a point (Add 10)
// We take the current score (0), add 10, and save it back into the variable.
score = score + 10;
console.log("Goal! Score:", score);

// 3. Player hits a bonus (Add 50)
score = score + 50;
console.log("Bonus! Score:", score);

// 4. Player gets a penalty (Subtract 5)
score = score - 5;
console.log("Penalty! Final Score:", score);

// 1. Primitive Data Types (Single values)
console.log("--- Primitives ---");
console.log("String:", "Hello World");       // Text
console.log("Number:", 42);                  // Math
console.log("Boolean:", true);               // Logic
console.log("Null:", null);                  // Intentional Empty
console.log("Undefined:", undefined);        // Default Empty

// 2. Reference Data Types (Complex structures)
console.log("--- References ---");
console.log("Array:", [1, 2, 3]);            // List
console.log("Object:", { name: "Gemini" });  // Collection

/**
 * Base Project Setup
 * This file initializes the core variables needed for the application.
 */

console.log("Initializing Base Variables...");

// 1. App Configuration (CONST - Never changes)
const appName = "My JavaScript Project";
const version = 1.0;
const maxRetries = 3;

// 2. User State (LET - Changes as the user interacts)
// We start as 'null' because no user is logged in yet.
let currentUser = null; 
let isLoggedIn = false;
let sessionDuration = 0; // in minutes

// 3. Application Settings (CONST Object - Mutable properties)
// We use const because the 'settings' container shouldn't be replaced,
// but we CAN change the specific values inside (like toggling dark mode).
const settings = {
    theme: "light",
    notificationsEnabled: true,
    language: "en-US"
};

// 4. Data Storage (CONST Array - Mutable contents)
// We can push new items into this list later.
const dataLog = [];

// 5. Verification
console.log("--- System Ready ---");
console.log(`App: ${appName} (v${version})`);
console.log("Current User:", currentUser);
console.log("Settings:", settings);