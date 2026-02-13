 function menuProgram() {
      let choice = parseInt(document.getElementById("choice").value);
      let message;

      switch(choice) {
        case 1:
          message = "You selected Pizza 🍕";
          break;
        case 2:
          message = "You selected Burger 🍔";
          break;
        case 3:
          message = "You selected Pasta 🍝";
          break;
        case 4:
          message = "Exiting menu...";
          break;
        default:
          message = "Invalid choice!";
      }

      document.getElementById("menuResult").innerText = message;
    }
