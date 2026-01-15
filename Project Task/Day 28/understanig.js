function safeDivide(a, b) {
  try {
    // 1. Check for non-numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Inputs must be numbers.");
    }

    // 2. Check for division by zero
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }

    // 3. Perform the math
    const result = a / b;
    console.log("Result:", result);

  } catch (error) {
    // 4. Handle the error gracefully
    console.log("⚠️ Calculation Failed:", error.message);
  }
}

// Test Cases
safeDivide(10, 2);      // Works: 5
safeDivide(10, 0);      // Catches: "Cannot divide by zero."
safeDivide(10, "bob");  // Catches: "Inputs must be numbers."



//2.JSON Parser with Error Handling


function parseUserData(jsonString) {
  try {
    console.log("Attempting to parse data...");
    
    // Attempt to convert string to Object
    const user = JSON.parse(jsonString);
    
    console.log(" Success! Welcome, " + user.name);
    
  } catch (error) {
    // This runs if the JSON is bad (e.g., missing quotes)
    console.log(" JSON Error: The data is corrupted.");
    console.log("Technical details:", error.message); // e.g., "Unexpected token..."
  }
}

// Scenario 1: Good Data
const goodData = '{"name": "Alice", "age": 25}';
parseUserData(goodData);

// Scenario 2: Bad Data (Missing quotes on name)
const badData = '{name: "Bob", "age": 30}'; 
parseUserData(badData);


//3.Login Validation with error messages


function validateLogin(username, password) {
  try {
    // Rule 1: Username required
    if (!username) {
      throw new Error("Username cannot be empty.");
    }

    // Rule 2: Password length
    if (password.length < 6) {
      throw new Error("Password is too short (min 6 chars).");
    }

    // Rule 3: Password complexity
    if (!password.includes("#")) {
      throw new Error("Password must contain a special character (#).");
    }

    console.log(" Login Validated for:", username);

  } catch (err) {
    console.log(" Login Failed:", err.message);
  }
}

// Test
validateLogin("JohnDoe", "123");         // Fails: Too short
validateLogin("JohnDoe", "secretpass");  // Fails: No special char
validateLogin("JohnDoe", "secret#123");  // Success


//4.Debug a Broken JavaScript Program


function calculateTotal() {
  const tax = 0.1;
  
  if (true) {
    let subtotal = 100; // 'let' is block-scoped!
    console.log("Calculating...");
  }

  // BUG: 'subtotal' does not exist here!
  console.log("Total:", subtotal + (subtotal * tax)); 
}

calculateTotal(); // ReferenceError: subtotal is not defined


function calculateTotal() {
  const tax = 0.1;
  let subtotal = 0; // Moved declaration up here

  if (true) {
    subtotal = 100; // Just updating the value
    console.log("Calculating...");
  }

  console.log("Total:", subtotal + (subtotal * tax)); 
}

calculateTotal(); // Output: Total: 110


//5.Custom Error Message Display


function checkAge() {
    const input = document.getElementById("age-input").value;
    const display = document.getElementById("error-display");

    // Clear previous errors
    display.innerText = "";

    try {
      if (input === "")  throw "Please enter a number.";
      if (isNaN(input))  throw "That is not a number.";
      if (input < 18)    throw "You must be 18+ to enter.";

      // Success
      alert("Access Granted!");

    } catch (errMessage) {
      // Display the custom error on the screen
      display.innerText = "Error: " + errMessage;
    }
  }