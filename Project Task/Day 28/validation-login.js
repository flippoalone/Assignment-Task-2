function validateLogin() {
      try {
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        if (!user || !pass) throw "Fields cannot be empty!";
        if (user === "admin" && pass === "1234") {
          document.getElementById("result").innerText = "Login Successful!";
        } else {
          throw "Invalid Username or Password!";
        }
      } catch (err) {
        document.getElementById("result").innerText = "Error: " + err;
      }
    }
