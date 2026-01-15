//4.Add & Remove Items App


const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("inventory-list");

// Function to handle adding items
function addItem() {
  const text = input.value;

  // Prevent empty items
  if (text === "") return;

  // 1. Create the Container (li)
  const newItem = document.createElement("li");
  
  // 2. Create the Content (span)
  const itemText = document.createElement("span");
  itemText.innerText = text;

  // 3. Create the Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";

  // --- THE REMOVE LOGIC ---
  // When 'Delete' is clicked, remove the PARENT (the <li>)
  deleteBtn.addEventListener("click", () => {
    newItem.remove();
  });

  // 4. Assemble: Put text and button inside the 'li'
  newItem.appendChild(itemText);
  newItem.appendChild(deleteBtn);

  // 5. Publish: Add 'li' to the main list
  list.appendChild(newItem);

  // 6. Reset Input
  input.value = "";
  input.focus(); // Keeps cursor in the box
}

// Listen for Button Click
addBtn.addEventListener("click", addItem);

deleteBtn.addEventListener("click", () => {
  newItem.remove(); 
});


//5.Simple Counter using DOM


// 1. Select Elements
const display = document.getElementById("count-display");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

// 2. Initialize State
// We keep the number in a variable, NOT just in the HTML
let count = 0;

// 3. Define Functions
function updateDisplay() {
  display.innerText = count;
  
  // Optional: Change color based on value
  if (count > 0) {
    display.style.color = "green";
  } else if (count < 0) {
    display.style.color = "red";
  } else {
    display.style.color = "black";
  }
}

// 4. Attach Listeners

// Increase
increaseBtn.addEventListener("click", () => {
  count++; // Add 1
  updateDisplay();
});

// Decrease
decreaseBtn.addEventListener("click", () => {
  count--; // Subtract 1
  updateDisplay();
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});