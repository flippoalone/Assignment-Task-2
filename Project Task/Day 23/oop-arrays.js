class Student {
  // 1. Constructor: Sets up the data
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // 2. Method: Logic to check performance
  hasPassed() {
    if (this.marks >= 40) {
      return "Passed";
    } else {
      return "Failed";
    }
  }
}

// --- USAGE ---

// Create a new Student
const student1 = new Student("Rahul", 85);
const student2 = new Student("Priya", 32);

// Access properties
console.log(student1.name); // Output: Rahul

// Use the method
console.log(student1.name + " has " + student1.hasPassed()); 
// Output: Rahul has Passed 

console.log(student2.name + " has " + student2.hasPassed()); 
// Output: Priya has Failed 

const classroom = [
    new Student("Amit", 90),
    new Student("Neha", 45),
    new Student("Arjun", 20)
];

// Loop through the class to find who passed
classroom.forEach(student => {
    console.log(`${student.name}: ${student.hasPassed()}`);
});



//2.Vehicle → Car Inheritance example




// 1. PARENT CLASS (The Base)
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  move() {
    console.log(`${this.brand} is moving at ${this.speed} km/h.`);
  }
}

// 2. CHILD CLASS (The Subclass)
// 'extends' means Car gets everything Vehicle has
class Car extends Vehicle {
  constructor(brand, speed, fuelType) {
    // 'super' calls the Parent's constructor (Vehicle)
    // We pass 'brand' and 'speed' up to the parent to handle
    super(brand, speed); 
    
    // We handle the new, specific property here
    this.fuelType = fuelType;
  }

  // A specific method only for Cars
  honk() {
    console.log("Beep! Beep!");
  }
}

// --- USAGE ---

// Create a Car object
const myCar = new Car("Toyota", 120, "Petrol");

// 1. Using an Inherited Method (from Vehicle)
myCar.move(); 
// Output: Toyota is moving at 120 km/h.

// 2. Using a Specific Method (from Car)
myCar.honk(); 
// Output: Beep! Beep!

// 3. Accessing properties
console.log(`It runs on ${myCar.fuelType}`);
// Output: It runs on Petrol


//3.Employee Management System (basic)

// 1. THE PARENT CLASS
class Employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  // A generic method
  work() {
    console.log(`${this.name} is working on tasks.`);
  }

  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Salary: $${this.salary}`;
  }
}

// 2. THE CHILD CLASS
class Manager extends Employee {
  constructor(name, id, salary, department) {
    // Call parent constructor
    super(name, id, salary);
    this.department = department;
  }

  // Overriding the work method (Polymorphism)
  work() {
    console.log(`${this.name} is managing the ${this.department} team.`);
  }
}

// 3. THE "SYSTEM" (Using an Array)
const company = [
  new Employee("Alice", 101, 50000),
  new Employee("Bob", 102, 55000),
  new Manager("Charlie", 201, 85000, "IT")
];

// --- SIMULATING THE MANAGEMENT SYSTEM ---

console.log("--- Employee Report ---");

company.forEach(emp => {
  // Print details
  console.log(emp.getDetails());
  
  // Make them work (Notice how Manager works differently than Employee)
  emp.work();
  
  console.log("-----------------------");
});


//4.Product List using array of objects

// 1. Define the Blueprint for a Product
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // A method to apply a discount
  getDiscountedPrice(percent) {
    const discountAmount = (this.price * percent) / 100;
    return this.price - discountAmount;
  }
}

// 2. Create the List (Array of Objects)
const catalog = [
  new Product("iPhone 15", 999, "Electronics"),
  new Product("Nike Shoes", 120, "Fashion"),
  new Product("Coffee Maker", 80, "Home"),
  new Product("Samsung TV", 1200, "Electronics")
];

// 3. Display the List
console.log("--- Product Catalog ---");
catalog.forEach(item => {
  console.log(`${item.name} - $${item.price} [${item.category}]`);
});

// 4. Filter the List (e.g., Show only Electronics)
const electronics = catalog.filter(item => item.category === "Electronics");

console.log("\n--- Electronics Only ---");
electronics.forEach(item => {
  console.log(item.name);
});

// 5. Calculate Total Value of Catalog
// 'reduce' is a handy array method to sum up numbers
const totalValue = catalog.reduce((total, item) => total + item.price, 0);

console.log(`\nTotal Inventory Value: $${totalValue}`);



//5.School System using OOP concepts


// 1. BASE CLASS (Parent)
class Member {
  constructor(fullName, id) {
    this.fullName = fullName;
    this.id = id;
  }

  getRole() {
    return "Generic Member";
  }
}

// 2. CHILD CLASS: Instructor
class Instructor extends Member {
  constructor(fullName, id, specialty) {
    super(fullName, id);
    this.specialty = specialty;
  }

  // Polymorphism
  getRole() {
    return `Lead Instructor for ${this.specialty}`;
  }
}

// 3. CHILD CLASS: Learner
class Learner extends Member {
  constructor(fullName, id, courseLevel) {
    super(fullName, id);
    this.courseLevel = courseLevel;
  }

  // Polymorphism
  getRole() {
    return `Learner (Level ${this.courseLevel})`;
  }
}

// 4. MANAGEMENT CLASS: Academy
class Academy {
  constructor(campusName) {
    this.campusName = campusName;
    this.roster = []; // Single array for everyone (different approach)
  }

  addMember(newMember) {
    this.roster.push(newMember);
    console.log(`[System]: Added ${newMember.fullName} to the database.`);
  }

  showAllMembers() {
    console.log(`\n=== ${this.campusName} Directory ===`);
    
    this.roster.forEach(person => {
      console.log(`${person.fullName} -> ${person.getRole()}`);
    });
  }
}

// --- USAGE ---

// 1. Create the Academy
const devBootcamp = new Academy("Tech Nova Institute");

// 2. Create People
const profX = new Instructor("Sarah Jenkins", 101, "Python");
const coder1 = new Learner("David Chen", 501, "Beginner");
const coder2 = new Learner("Emily Blunt", 502, "Advanced");

// 3. Add them to the system
devBootcamp.addMember(profX);
devBootcamp.addMember(coder1);
devBootcamp.addMember(coder2);

// 4. Print the directory
devBootcamp.showAllMembers();