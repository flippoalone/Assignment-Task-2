// Step 1: Select the elements we need
const div = document.getElementById("status-text");
const button = document.getElementById("change-btn");

// Step 2: Define the function (The Action)
function updateStatus() {
  div.innerText = "Status:  Completed!";
  div.style.color = "green"; // Visual feedback
  
  // Optional: Disable the button so they can't click it again
  button.innerText = "Done";
  button.disabled = true;
}

// Step 3: Attach the Event Listener
// When 'button' detects a 'click', run 'updateStatus'
button.addEventListener("click", updateStatus);

