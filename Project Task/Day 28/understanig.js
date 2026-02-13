function checkAge() {
      try {
        let age = parseInt(document.getElementById("age").value);
        if (isNaN(age)) throw new Error("Age must be a number!");
        if (age < 18) throw new Error("You must be at least 18 years old.");
        document.getElementById("result").innerText = "Access Granted!";
      } catch (err) {
        document.getElementById("result").innerText = "Custom Error: " + err.message;
      }
    }
