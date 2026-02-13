function runCode() {
      try {
        // Intentional bug: variable not defined
        let sum = a + 10; 
        document.getElementById("result").innerText = "Sum: " + sum;
      } catch (err) {
        console.error("Debugging Error:", err); // logs error in console
        document.getElementById("result").innerText = "Error caught: " + err.message;
      }
    }
