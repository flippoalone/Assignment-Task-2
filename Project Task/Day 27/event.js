// 1. Select the elements
const counterDisplay = document.getElementById("counter");
const clickBtn = document.getElementById("click-btn");
const resetBtn = document.getElementById("reset-btn");

// 2. Initialize State
// This variable is the "Brain" of the app
let clicks = 0;

// 3. The Main Function
clickBtn.addEventListener("click", () => {
  // A. Update Data
  clicks++; 

  // B. Update Screen
  counterDisplay.innerText = clicks;
  
  // Optional: Fun console log
  console.log(`Click count is now: ${clicks}`);
});

// 4. The Reset Function
resetBtn.addEventListener("click", () => {
  clicks = 0;
  counterDisplay.innerText = 0;
});



//2.Keyboard Typing Detector


const keyName = document.getElementById("key-name");
const keyCode = document.getElementById("key-code");

// We attach the listener to the whole 'document' window
// because we want to catch keys no matter where the mouse is.
document.addEventListener("keydown", (event) => {
  
  // 1. Get the Key Name (e.g., "a", "Enter", " ")
  // If it is a space, we print "Spacebar" for clarity
  let name = event.key;
  if (name === " ") {
    name = "Spacebar";
  }

  // 2. Get the Key Code (e.g., "KeyA", "Space")
  const code = event.code;

  // 3. Update the Screen
  keyName.innerText = name;
  keyCode.innerText = code;
  
  // Optional: Play a sound or console log
  console.log(`User pressed: ${name}`);
});


//3.Live Input Preview

// 1. Select Elements
const inputBox = document.getElementById("user-input");
const outputSpan = document.getElementById("output");

// 2. Attach Event Listener
// 'input' fires every single time a character is added or removed.
inputBox.addEventListener("input", () => {
  
  // Get the current text
  const currentText = inputBox.value;

  // Handle the empty state
  if (currentText === "") {
    outputSpan.innerText = "..."; // Placeholder
  } else {
    outputSpan.innerText = currentText; // Update Live
  }

});


//4.Form Submission Validator



const form = document.getElementById("login-form");
const userParams = document.getElementById("username"); // Changed var name to avoid conflict
const passInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (event) => {
  
  // 1. CRITICAL: Stop the page from reloading!
  event.preventDefault();

  // 2. Clear previous errors
  errorMsg.innerText = "";
  
  // 3. Get the values
  const nameValue = userParams.value;
  const passValue = passInput.value;

  // --- VALIDATION RULES ---

  // Rule A: Username cannot be empty
  if (nameValue === "" || nameValue === null) {
    errorMsg.innerText = " Error: Username is required.";
    return; // Stop the function here
  }

  // Rule B: Password must be 6+ characters
  if (passValue.length < 6) {
    errorMsg.innerText = " Error: Password is too short.";
    return;
  }

  // 4. Success!
  // In a real app, this is where you send data to the backend.
  alert(`Login Successful! Welcome, ${nameValue}.`);
  console.log("Form Submitted.");
});


//5.Nested Click Logger (Bubbling demo)



const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const list = document.getElementById("log-list");

function logEvent(text) {
  const item = document.createElement("li");
  item.innerText = text;
  list.appendChild(item);
  console.log(text);
}

function clearLog() {
  list.innerHTML = "";
}

// 1. Child Listener
child.addEventListener("click", (e) => {
  logEvent(" Child Clicked!");
  // e.stopPropagation(); // Uncomment this to STOP bubbling
});

// 2. Parent Listener
parent.addEventListener("click", () => {
  logEvent(" Parent Clicked!");
});

// 3. Grandparent Listener
grandparent.addEventListener("click", () => {
  logEvent(" Grandparent Clicked!");
});