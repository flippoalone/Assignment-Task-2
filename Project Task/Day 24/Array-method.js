const marks = [85, 92, 78, 88, 64];

// 1. Calculate Total using REDUCE
// 'accumulator' keeps the running total
// 'mark' is the current number we are looking at
// '0' is the starting value of the total
const totalMarks = marks.reduce((accumulator, mark) => {
  return accumulator + mark;
}, 0);

// 2. Calculate Average
const averageMarks = totalMarks / marks.length;

console.log("Marks List:", marks);
console.log("Total Score:", totalMarks); // Output: 407
console.log("Average Score:", averageMarks); // Output: 81.4


const highestScore = marks.reduce((max, current) => {
  // If current number is higher than max, keep current. Otherwise keep max.
  return (current > max) ? current : max;
}, 0);

console.log("Highest Score:", highestScore); // Output: 92



//2.Even/Odd Number Filter App



class NumberSorter {
  constructor() {
    this.numbers = []; // The main storage for all numbers
  }

  // 1. INPUT: Add a single number or a list of numbers
  addNumbers(inputArray) {
    // We use the spread operator (...) to push all items at once
    this.numbers.push(...inputArray); 
    console.log(`Loaded ${inputArray.length} numbers into the system.`);
  }

  // 2. PROCESS: Filter out the Even numbers
  getEvens() {
    return this.numbers.filter(num => num % 2 === 0);
  }

  // 3. PROCESS: Filter out the Odd numbers
  getOdds() {
    return this.numbers.filter(num => num % 2 !== 0);
  }

  // 4. OUTPUT: Show the full report
  printReport() {
    const evens = this.getEvens();
    const odds = this.getOdds();

    console.log("\n--- PROCESSING REPORT ---");
    console.log("Full List: " + this.numbers.join(", "));
    console.log("-------------------------");
    console.log(` Even Numbers (${evens.length}): ${evens.join(", ")}`);
    console.log(` Odd Numbers  (${odds.length}): ${odds.join(", ")}`);
  }
}

// --- RUNNING THE APP ---

// 1. Start the App
const app = new NumberSorter();

// 2. Input Data
app.addNumbers([12, 5, 8, 13, 20, 7, 99]);
app.addNumbers([2, 4]); // You can add more later

// 3. Generate Report
app.printReport();


//3.Product Price Calculator using map



const products = [
  { name: "Headphones", price: 50 },
  { name: "Keyboard", price: 100 },
  { name: "Monitor", price: 300 }
];

const TAX_RATE = 0.18; // 18% Tax

// 1. Use MAP to create a new list with calculated prices
const billedProducts = products.map((item) => {
  const taxAmount = item.price * TAX_RATE;
  const total = item.price + taxAmount;

  // We return a new object with the extra details
  return {
    name: item.name,
    originalPrice: item.price,
    tax: taxAmount,
    finalPrice: total
  };
});

// 2. Display the Results
console.log("--- Price Breakdown ---");

billedProducts.forEach(item => {
  console.log(`${item.name}: $${item.originalPrice} + $${item.tax} Tax = $${item.finalPrice}`);
});


//4.Search Students Above Certain Marks


class StudentDatabase {
  constructor() {
    this.students = [];
  }

  // 1. Add a student to the list
  addStudent(name, marks) {
    this.students.push({ name: name, marks: marks });
  }

  // 2. The Search Logic
  // Find everyone with marks greater than or equal to 'minMarks'
  findTopStudents(minMarks) {
    const results = this.students.filter(student => student.marks >= minMarks);
    return results;
  }
}

// --- USAGE ---

// 1. Setup
const db = new StudentDatabase();

// 2. Add Data
db.addStudent("Rohan", 45);
db.addStudent("Sara", 92);
db.addStudent("Vikram", 78);
db.addStudent("Anjali", 88);

// 3. Search for students with marks above 80
const cutoff = 80;
const topPerformers = db.findTopStudents(cutoff);

// 4. Print Results
console.log(`--- Students with > ${cutoff} Marks ---`);

if (topPerformers.length > 0) {
  topPerformers.forEach(s => {
    console.log(`${s.name}: ${s.marks}`);
  });
} else {
  console.log("No students found in this range.");
}


//5.Shopping Cart Total Calculator


class ShoppingCart {
  constructor() {
    this.cart = []; // Empty list to start
  }

  // 1. Action: Add Item
  addItem(itemName, itemPrice) {
    const product = { name: itemName, price: itemPrice };
    this.cart.push(product);
    console.log(`Added: ${itemName} ($${itemPrice})`);
  }

  // 2. Action: Calculate Total
  getTotal() {
    // reduce() loops through the cart and sums up the prices
    // 'total' starts at 0
    const sum = this.cart.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return sum;
  }

  // 3. Action: Show Receipt
  printReceipt() {
    console.log("\n--- YOUR RECEIPT ---");
    
    // Loop to print each line item
    this.cart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name}: $${item.price}`);
    });

    console.log("--------------------");
    console.log(`TOTAL TO PAY: $${this.getTotal()}`);
    console.log("--------------------");
  }
}

// --- USING THE CART ---

// 1. Create my cart
const myCart = new ShoppingCart();

// 2. Add items
myCart.addItem("Wireless Mouse", 25);
myCart.addItem("Keyboard", 50);
myCart.addItem("USB Cable", 10);

// 3. Calculate and Print
myCart.printReceipt();