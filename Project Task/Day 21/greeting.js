function greetUser() {
      let name = document.getElementById("username").value;
      document.getElementById("greeting").innerText = "Hello, " + name + "! Welcome to the app.";
    }
