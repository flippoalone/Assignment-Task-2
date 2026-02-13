function checkAccess() {
      let role = document.getElementById("role").value.toLowerCase();
      let message;

      switch(role) {
        case "admin":
          message = "Full Access Granted.";
          break;
        case "editor":
          message = "Edit Access Granted.";
          break;
        case "viewer":
          message = "Read-Only Access Granted.";
          break;
        default:
          message = "Invalid Role!";
      }

      document.getElementById("accessResult").innerText = message;
    }
