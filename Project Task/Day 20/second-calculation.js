function add(a, b) { return a + b; }
    function sub(a, b) { return a - b; }
    function mul(a, b) { return a * b; }
    function div(a, b) { return a / b; }

    function calculate() {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      let op = document.getElementById("operation").value;
      let result;

      if (op === "add") result = add(n1, n2);
      else if (op === "sub") result = sub(n1, n2);
      else if (op === "mul") result = mul(n1, n2);
      else if (op === "div") result = div(n1, n2);

      document.getElementById("calcResult").innerText = "Result: " + result;
    }
