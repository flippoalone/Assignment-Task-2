function calculate() {
      try {
        let n1 = parseFloat(document.getElementById("num1").value);
        let n2 = parseFloat(document.getElementById("num2").value);
        let op = document.getElementById("operation").value;
        let res;

        if (isNaN(n1) || isNaN(n2)) throw "Invalid input! Please enter numbers.";

        if (op === "add") res = n1 + n2;
        else if (op === "sub") res = n1 - n2;
        else if (op === "mul") res = n1 * n2;
        else if (op === "div") {
          if (n2 === 0) throw "Division by zero not allowed!";
          res = n1 / n2;
        }

        document.getElementById("result").innerText = "Result: " + res;
      } catch (err) {
        document.getElementById("result").innerText = "Error: " + err;
      }
    }
