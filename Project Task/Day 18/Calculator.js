function calculate() {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      let op = document.getElementById("operation").value;
      let result;

      if (op === "add") result = n1 + n2;
      else if (op === "sub") result = n1 - n2;
      else if (op === "mul") result = n1 * n2;
      else if (op === "div") result = n1 / n2;

      document.getElementById("calcResult").innerText = "Result: " + result;
    }
