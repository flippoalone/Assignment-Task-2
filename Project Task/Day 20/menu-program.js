 function menuProgram() {
      let choice = parseInt(document.getElementById("choice").value);
      let message;

      function pizza() { return "You selected Pizza 🍕"; }
      function burger() { return "You selected Burger 🍔"; }
      function pasta() { return "You selected Pasta 🍝"; }
      function exit() { return "Exiting menu..."; }

      switch(choice) {
        case 1: message = pizza(); break;
        case 2: message = burger(); break;
        case 3: message = pasta(); break;
        case 4: message = exit(); break;
        default: message = "Invalid choice!";
      }

      document.getElementById("menuResult").innerText = message;
    }
