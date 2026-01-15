//2.Theme Changer (Light/Dark Mode)

const button = document.getElementById("theme-btn");
const body = document.getElementById("page-body");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  button.innerText = "Switch to Light Mode ☀️";
} else {
  button.innerText = "Switch to Dark Mode 🌙";
}

button.addEventListener("click", () => {

  // .toggle() is a magic method:
  // If the class exists -> REMOVE it.
  // If the class is missing -> ADD it.
  body.classList.toggle("dark-mode");

  // Optional: Change button text based on the mode
  if (body.classList.contains("dark-mode")) {
    button.innerText = "Switch to Light Mode ☀️";
    localStorage.setItem('theme', 'dark');
  } else {
    button.innerText = "Switch to Dark Mode 🌙";
    localStorage.setItem('theme', 'light');
  }

});



//3.Dynamic Todo List


const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  // 1. Get the text
  const taskText = input.value;

  // Validation: Don't add empty tasks
  if (taskText === "") {
    alert("Please write a task first!");
    return;
  }

  // 2. Create the new List Item
  const newItem = document.createElement("li");
  
  // We'll put the text in a span so we can style it separately if needed
  const textSpan = document.createElement("span");
  textSpan.innerText = taskText;
  
  // 3. Create a Delete Button for this specific item
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "delete-btn";

  // --- FEATURE A: MARK AS DONE ---
  // Clicking the text toggles the strikethrough
  textSpan.addEventListener("click", () => {
    textSpan.classList.toggle("completed");
  });

  // --- FEATURE B: DELETE ITEM ---
  // Clicking the X removes the entire <li> from the list
  deleteBtn.addEventListener("click", () => {
    newItem.remove(); // Removes itself from the DOM
  });

  // 4. Assemble everything
  newItem.appendChild(textSpan);
  newItem.appendChild(deleteBtn);
  list.appendChild(newItem);

  // 5. Clear the input box for the next task
  input.value = "";
});

