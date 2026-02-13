function validateLogin() {
      let user = document.getElementById("username").value;
      let pass = document.getElementById("password").value;

      if ((user === "admin" && pass === "1234") || (user === "akash" && pass === "abcd")) {
        document.getElementById("loginResult").innerText = "Login Successful!";
      } else {
        document.getElementById("loginResult").innerText = "Invalid Credentials!";
      }
    }
