const classMarks = [
  // Name      Math  Sci   Eng
  ["Rohan",     85,   90,   88], // Row 0
  ["Sarah",     72,   65,   80], // Row 1
  ["Vikram",    95,   98,   92], // Row 2
  ["Anjali",    60,   75,   70]  // Row 3
];

console.log(`${classMarks[1][0]} scored ${classMarks[1][2]} in Science.`);
// Output: Sarah scored 65 in Science.


console.log("--- CLASS REPORT CARD ---");

for (let i = 0; i < classMarks.length; i++) {
  const studentRow = classMarks[i];
  
  const name = studentRow[0];
  const math = studentRow[1];
  const science = studentRow[2];
  const english = studentRow[3];

  // Calculate Total
  const total = math + science + english;
  
  // Calculate Average (Total / 3 subjects)
  // .toFixed(1) rounds to 1 decimal place
  const average = (total / 3).toFixed(1); 

  console.log(`${name}: Total ${total} | Avg ${average}%`);
}


//2.Matrix Addition Program


// 1. Define two 2x2 Matrices
const matrixA = [
  [1, 2],
  [3, 4]
];

const matrixB = [
  [5, 6],
  [7, 8]
];

// 2. Prepare an empty matrix for the result
// We know it will be 2x2, so we can initialize it
let result = [
  [0, 0],
  [0, 0]
];

// 3. Perform Addition using Nested Loops
for (let i = 0; i < matrixA.length; i++) {       // Loop Rows
  for (let j = 0; j < matrixA[i].length; j++) {  // Loop Columns
    
    // The Core Logic: Add spot A to spot B
    result[i][j] = matrixA[i][j] + matrixB[i][j];
    
  }
}

// 4. Print the Result
console.log("--- Matrix A ---");
console.log(matrixA);

console.log("--- Matrix B ---");
console.log(matrixB);

console.log("--- Sum (A + B) ---");
console.log(result);


let dynamicResult = [];

for (let i = 0; i < matrixA.length; i++) {
  let row = []; // Create a fresh row
  for (let j = 0; j < matrixA[i].length; j++) {
    row.push(matrixA[i][j] + matrixB[i][j]); // Add summed numbers to row
  }
  dynamicResult.push(row); // Add completed row to matrix
}


//3.Seating Arrangement Chart


// 1. Initialize the Seating Grid (3 Rows x 4 Columns)
const seats = [
  ['O', 'O', 'O', 'O'], // Row 0
  ['O', 'O', 'O', 'O'], // Row 1
  ['O', 'O', 'O', 'O']  // Row 2
];

// Function to display the current chart nicely
function showSeatingChart() {
  console.log("\n--- SCREEN ---");
  seats.forEach((row, rowIndex) => {
    // .join(" ") prints the array like "O O X O" instead of ["O","O"...]
    console.log(`Row ${rowIndex}:  ${row.join("  ")}`);
  });
  console.log("--------------");
}

// Function to book a specific seat
function bookSeat(row, col) {
  // Check if the seat exists and is open
  if (seats[row][col] === 'O') {
    seats[row][col] = 'X'; // Mark as Taken
    console.log(` Success! Booked Row ${row}, Seat ${col}.`);
  } else {
    console.log(` Error: Row ${row}, Seat ${col} is already taken!`);
  }
}

// --- USAGE ---

// 1. Show empty room
showSeatingChart();

// 2. Book some seats
bookSeat(0, 2); // Front row, 3rd seat
bookSeat(1, 1); // Middle row, 2nd seat
bookSeat(0, 2); // Try booking the same seat again (Should fail)

// 3. Show updated room
showSeatingChart();


//4.Game Board Representation


// 1. THE MAP REPRESENTATION
// 5 Rows x 5 Columns
let gameBoard = [
  ['#', '#', '#', '#', '#'], // Row 0 (Top Wall)
  ['#', 'P', '.', 'T', '#'], // Row 1 (Player & Treasure)
  ['#', '.', '#', '.', '#'], // Row 2 (Obstacles)
  ['#', '.', '.', '.', '#'], // Row 3 (Empty Space)
  ['#', '#', '#', '#', '#']  // Row 4 (Bottom Wall)
];

// 2. FUNCTION TO RENDER THE BOARD
function drawBoard() {
  console.log("\n--- DUNGEON MAP ---");
  
  gameBoard.forEach(row => {
    // .join(" ") adds a space between characters for better visibility
    console.log(row.join("  ")); 
  });
}

// 3. FUNCTION TO MOVE THE PLAYER
// Let's try to move Player from (1,1) to (1,2)
function movePlayer(currentRow, currentCol, newRow, newCol) {
  // Check if the new spot is a Wall
  if (gameBoard[newRow][newCol] === '#') {
    console.log(` Bonk! You hit a wall at ${newRow},${newCol}`);
    return;
  }

  // Check if we found Treasure
  if (gameBoard[newRow][newCol] === 'T') {
    console.log(" You found the Treasure!");
  }

  // Perform the Move:
  // 1. Clear old spot
  gameBoard[currentRow][currentCol] = '.'; 
  // 2. Set new spot to Player
  gameBoard[newRow][newCol] = 'P';
  
  console.log(" Player moved.");
}

// --- GAMEPLAY ---

// Start
drawBoard();

// Attempt to move right (into empty space)
movePlayer(1, 1, 1, 2); 
drawBoard();

// Attempt to move right again (into Treasure)
movePlayer(1, 2, 1, 3);
drawBoard();


//5.Weekly Expense Tracker (2D array)



// Data Structure: 7 Rows (Days) x 3 Columns (Categories)
// Categories: [ Food, Travel, Misc ]
const weeklyExpenses = [
  [15, 10, 0],   // Monday    (Row 0)
  [20, 5,  15],  // Tuesday   (Row 1)
  [10, 10, 0],   // Wednesday (Row 2)
  [25, 0,  20],  // Thursday  (Row 3)
  [15, 5,  5],   // Friday    (Row 4)
  [50, 20, 50],  // Saturday  (Row 5) - Big Weekend!
  [40, 0,  10]   // Sunday    (Row 6)
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 1. Calculate and Print Daily Totals (Row Sums)
console.log("--- DAILY SPENDING ---");

for (let i = 0; i < weeklyExpenses.length; i++) {
  let dailyTotal = 0;
  
  // Sum up the columns for this specific day
  for (let j = 0; j < weeklyExpenses[i].length; j++) {
    dailyTotal += weeklyExpenses[i][j];
  }

  console.log(`${days[i]}: $${dailyTotal}`);
}

// 2. Calculate Category Totals (Column Sums)
// We need 3 buckets: Food(0), Travel(1), Misc(2)
let categoryTotals = [0, 0, 0];

for (let i = 0; i < weeklyExpenses.length; i++) {
  categoryTotals[0] += weeklyExpenses[i][0]; // Add Food
  categoryTotals[1] += weeklyExpenses[i][1]; // Add Travel
  categoryTotals[2] += weeklyExpenses[i][2]; // Add Misc
}

console.log("\n--- CATEGORY BREAKDOWN ---");
console.log(`Food:   $${categoryTotals[0]}`);
console.log(`Travel: $${categoryTotals[1]}`);
console.log(`Misc:   $${categoryTotals[2]}`);