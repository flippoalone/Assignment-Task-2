 function generateTable() {
      let num = document.getElementById("num").value;
      let output = "<h3>Table of " + num + "</h3>";
      for (let i = 1; i <= 10; i++) {
        output += num + " x " + i + " = " + (num * i) + "<br>";
      }
      document.getElementById("tableResult").innerHTML = output;
    }
