const student = {
    name: "Alex Johnson",  // String
    age: 20,               // Number
    marks: [85, 90, 78],   // Array (List of numbers)
    isEnrolled: true       // Boolean
};

// Accessing the data
console.log(student.name);   // Output: Alex Johnson
console.log(student.marks);  // Output: [85, 90, 78]


//This is car properties

const car = {
    // Properties (Data)
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    color: "Red",

    // Method (Function)
    // We use 'this' to access the object's own properties
    displayDetails: function() {
        console.log(`Vehicle Info: ${this.year} ${this.brand} ${this.model} (${this.color})`);
    }
};

// Calling the method
car.displayDetails(); 
// Output:  Vehicle Info: 2024 Tesla Model 3 (Red)


//THis is a userprofile content

const userProfile = {
    // Data Properties
    username: "coder_jane",
    email: "jane@example.com",
    status: "Away",

    // Method to update the status
    // It accepts a new status string and saves it to 'this.status'
    updateStatus: function(newStatus) {
        this.status = newStatus;
        console.log(` Status updated to: "${this.status}"`);
    }
};

// 1. Check initial state
console.log("Current Status:", userProfile.status); // Output: Away

// 2. Use the method to change data
userProfile.updateStatus("Online");

// 3. Verify the change
console.log("Current Status:", userProfile.status); // Output: Online


//This is product objects


const product = {
    // Properties
    name: "Wireless Headphones",
    price: 99.99,
    stock: 50,

    // Method to safely update the price
    setPrice: function(newPrice) {
        // Validation Logic: Ensure the price is positive
        if (newPrice > 0) {
            this.price = newPrice;
            console.log(` Price updated to $${this.price}`);
        } else {
            console.log(" Error: Price must be greater than zero.");
        }
    }
};

// 1. Check current price
console.log("Original Price:", product.price); // Output: 99.99

// 2. Try a valid update
product.setPrice(79.99); // Output:  Price updated to $79.99

// 3. Try an invalid update (Safety Check)
product.setPrice(-20);   // Output:  Error: Price must be greater than zero.


//This is bank Account script



const bankAccount = {
    // 1. Data (The State)
    owner: "Alice",
    balance: 1000,

    // 2. Deposit Method (Adds money)
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(` Deposited $${amount}. New Balance: $${this.balance}`);
        } else {
            console.log(" Error: Deposit amount must be positive.");
        }
    },

    // 3. Withdraw Method (Subtracts money)
    withdraw: function(amount) {
        // Validation: Check if we have enough money first!
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(` Withdrew $${amount}. Remaining: $${this.balance}`);
        } else {
            console.log(` Error: Insufficient funds. You only have $${this.balance}.`);
        }
    }
};

// --- Testing the Account ---
console.log(`Owner: ${bankAccount.owner}`); // Output: Owner: Alice

bankAccount.deposit(500);  // Balance becomes 1500
bankAccount.withdraw(200); // Balance becomes 1300
bankAccount.withdraw(5000);// Error: Insufficient funds