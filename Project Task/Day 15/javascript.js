 console.log("Message 1: Page loaded successfully.");
    console.info("Message 2: Informational message.");
    console.warn("Message 3: Warning message.");
    console.error("Message 4: Error message example.");
    console.debug("Message 5: Debug message.");

// script.js
console.log("External script connected successfully!");
alert("Hello from the external JS file!");

// 1. String (Text)
console.log("Hello, World!");

// 2. Number (Integer and Float)
console.log(100);
console.log(99.99);

// 3. Boolean
console.log(true);

// 4. Array (List)
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// 5. Object (Key-Value pairs)
const person = {
    name: "John Doe",
    age: 30,
    isMember: true
};
console.log(person);

// 6. Mixed (Text combined with variables)
console.log("User", person.name, "is", person.age, "years old.");


// 1. String (Text)
// The console.log() function prints the text string inside the quotes to the console.
console.log("Hello, World!");

// 2. Number (Integer and Float)
// Prints the whole number (integer) 100.
console.log(100);
// Prints the decimal number (floating-point) 99.99.
console.log(99.99);

// 3. Boolean
// Prints the logical value 'true' (used for logic like Yes/No or On/Off).
console.log(true);

// 4. Array (List)
// Declares a constant variable named 'fruits' that holds a list of three strings.
const fruit = ["Apple", "Banana", "Cherry"];
// Prints the entire list so you can see all items at once.
console.log(fruit);

// 5. Object (Key-Value pairs)
// Declares an object named 'person' to group related data together.
const personal = {
    name: "John Doe",  // Key: 'name', Value: String
    age: 30,           // Key: 'age', Value: Number
    isMember: true     // Key: 'isMember', Value: Boolean
};
// Prints the object structure, allowing you to inspect its properties.
console.log(personal);

// 6. Mixed Output
// Prints text combined with variables. The console adds a space between each argument automatically.
// It accesses the specific values inside the 'person' object using the dot notation (person.name).
console.log("User", person.name, "is", person.age, "years old.");